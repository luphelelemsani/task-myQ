module.exports = [
  {
    name: "preset",
    type: "list",
    message: "Where do you want to use your Crazybuttons components?",
    choices: [
      {
        name: "Global",
        value: "global",
      },
      {
        name: "Local",
        value: "local",
      },
    ],
    default: "global",
  },
];
