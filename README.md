[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
# Metadata specifications for verona modules

Verona modules are pieces of code. They are used by (web-) applications as kind of plugins, i. e. they are loaded at runtime on demand. To ease the management of the modules, every Verona module must provide specific information about it's functionality and state. Metadata like name, label, version and maintainer are essential for the interaction between module and host.

## JSON Linked Data
Verona modules are published as html files. The way metadata are included is JSON-LD: A specification recommended by W3C to support the semantic web approach. Due to the rich landscape of tools, we run for JSON-LD.

## Vocabulary Definitions
We created our own vocabulary to define the necessary information in our metadata, which can be found [here](https://github.com/verona-interfaces/metadata/blob/master/verona_modules_vocab.jsonld).
The vocabulary defines classes and properties used in our metadata.

### Class: Editor
This class defines the type of a verona module as "**Editor**". It has the following properties:
**id**: Unique id for a module (This is relevant for the URL scheme)
**name**: The name of the specific verona module. Any arbitrary string should be accepted. Multiple languages are supported.
**description**: The description of the verona module.  A text of arbitrary length should be accepted. Multiple languages are supported
**version**: Current version number of the module. It should follow the semantiv versioning (SemVer) scheme. (MAJOR.MINOR.PATCH)
**apiVersion**: This represents the current supported API version.
**notSupportedFeature**: A list of features that are not supported. The possible values are: 
* report-eager 

### Class: Player
This class defines the type of a verona module as "**Player**". It has the following properties
**id**: Unique id for a module (This is relevant for the URL scheme)
**name**: The name of the specific verona module. Any arbitrary string should be accepted. Multiple languages are supported.
**description**: The description of the verona module.  A text of arbitrary length should be accepted. Multiple languages are supported
**version**: Current version number of the module. It should follow the semantiv versioning (SemVer) scheme. (MAJOR.MINOR.PATCH)
**apiVersion**: This represents the current supported API version.
**notSupportedFeature**: A list of features that are not supported. The possible values are:
* stop-continue 
* focus-notify 
* report-on-demand 
* log-policy 
* paging-mode 
* navigation-denied

### Class: Maintainer
This class defines the maintainer of a verona module. This represents a person or organization that is responsible for this module. It has the following properties:
**name**: Name of a maintainer. Multiple languages are supported
**url**: The URL to a website belonging to the maintainer.
**email**: The email address of the maintainer.

### Class: Repository
This class defines the repository in which the code of the verona module resides. It has the following properties:
**repoType**: Describes which kind of repository it is. Possible values include: Git, SVN, Mercury
**url**: URL of the repository
