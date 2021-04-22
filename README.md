[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
# Metadata specifications for verona modules

Verona modules are pieces of code. They are used by (web-) applications as kind of plugins, i. e. they are loaded at runtime on demand. To ease the management of the modules, every Verona module must provide specific information about it's functionality and state. Metadata like name, label, version and maintainer are essential for the interaction between module and host.

## JSON Linked Data
Verona modules are published as html files. The way metadata are included is JSON-LD: A specification recommended by W3C to support the semantic web approach. Due to the rich landscape of tools, we run for JSON-LD.

