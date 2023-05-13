/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  //category example
  // type: 'category',
  // label: 'Tutorial',
  // items: ['my-projects/huffman','my-projects/testing'],

  projectsSidebar: [
    'my-projects/project-viznet',
    'my-projects/aeronet',
    'my-projects/digit-recognition-canvas',
    'my-projects/array-sorting-visualized',
    {
      type: 'category',
      label: 'Assembler / Simulator',
      items: ['my-projects/mips-assembler','my-projects/mips-simulator'],
      collapsed: false,
    },
    'my-projects/data-cache-simulator',
    'my-projects/socket-chatroom',
    'my-projects/simple-shell',
    'my-projects/c-archive',
    'my-projects/notepad-light',
    'my-projects/huffman',
    'my-projects/vigenere-cipher',
    'my-projects/neural-network-canvas',
  ],
};

module.exports = sidebars;