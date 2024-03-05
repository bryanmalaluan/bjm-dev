module.exports = {
  root: true,
  extends: ["universe/native"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-shadow": "off",
        "no-undef": "off",
        "react-native/no-inline-styles": "off",
        "react-hooks/exhaustive-deps": "off",
      },
    },
  ],
};
