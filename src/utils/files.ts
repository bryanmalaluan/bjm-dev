import { loadingState$ } from "@src/legend-state/loading";
import { userState$ } from "@src/legend-state/user";
import * as FileSystem from "expo-file-system";
import * as Linking from "expo-linking";
import { shareAsync } from "expo-sharing";
import { Platform } from "react-native";

/**
 * save file in device folder
 * works for ios and android only
 * @params uri, filename, mimetype
 */
export const saveFile = async ({
  uri,
  filename,
  mimetype,
}: {
  uri: string;
  filename: string;
  mimetype: string;
}) => {
  if (Platform.OS === "android") {
    const permissions =
      await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

    if (permissions.granted) {
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      await FileSystem.StorageAccessFramework.createFileAsync(
        permissions.directoryUri,
        filename,
        mimetype,
      )
        .then(async (uri) => {
          await FileSystem.writeAsStringAsync(uri, base64, {
            encoding: FileSystem.EncodingType.Base64,
          });
        })
        .catch((e) => console.log(e));
    } else {
      shareAsync(uri);
    }
  } else {
    shareAsync(uri);
  }
};

/**
 * downloads file from url
 * @param url
 */
export const downloadFile = async ({ url }: { url: string }) => {
  const user = userState$.user;
  const loading = loadingState$.loading;

  try {
    loading.set(true);

    // web has different approach, it will only opens the url
    if (Platform.OS === "web") {
      const isValid = await Linking.canOpenURL(url);

      if (isValid) {
        await Linking.openURL(url);
      }

      return;
    }

    // downloading file only works for ios and android in saving device folder
    const filename = `${user.lastName.peek()}_CV.pdf`;
    const result = await FileSystem.downloadAsync(
      url,
      FileSystem.documentDirectory + filename,
    );

    // save the downloaded file
    saveFile({
      uri: result.uri,
      filename,
      mimetype: result.headers["Content-Type"],
    });
  } catch (ex) {
    console.error(ex);
  } finally {
    loading.set(false);
  }
};
