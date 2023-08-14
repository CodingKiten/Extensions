class ColorChanger {
  constructor(runtime) {
    this.runtime = runtime;
  }
  
  getInfo() {
    return {
      id: 'color-changer',
      name: 'Color Changer',
      blocks: [
        {
          opcode: 'changeStageColor',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Change stage color to [COLOR]',
          arguments: {
            COLOR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'red'
            }
          }
        }
      ]
    };
  }
  
  changeStageColor(args) {
    const color = args.COLOR;
    document.body.style.backgroundColor = color;
  }
}

Scratch.extensions.register(new ColorChanger(Scratch.runtime));
