[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
# Metadata specifications for verona modules

Verona Modules are pieces of code. They are used by (web-) applications as kind of plugins, i.e. they are loaded at runtime on demand. To ease the management of the modules, every Verona module must provide specific information about its functionality and state. Metadata like name, label, version and maintainer are essential for the interaction between module and host.

## release notes
### 2.0
* add metadata specification version to track changes
* remove some entries in `notSupportedFeatures` for player due to removals in player specification 5.0
* add 

## JSON
The file type of the runtime version of Verona Modules is either Html or JavaScript. In both cases, the metadata are stored as JSON. For **Html-Files** we use JSON-LD, so all applications interested in metadata can read the metadata by looking for a script tag typed as json-ld:
```html
<script type="application/ld+json">
    {
        ...
    }
</script>
```
In **js-Files** we expect an object declared as export constant. This `metadata`-variable can be found by any application managing Verona modules.
```javascript
export const metadata = {
    ...
}
```

## JSON SCHEMA
We do not explain the metadata in detail. Instead, please read the [JSON schema](verona-module-metadata.json). The included descriptions will help to understand the meaning of the data. 

There is one property `notSupportedFeatures`. Here we expect keys of features of Verona modules specification, which your module does not support. For more information, please go to the module specification(s). 

Possible values for `notSupportedFeatures` are:

| Key | Module(s) | Description |
| ------ | ------ | ----- |
| `focus-notify` | Player | In case of getting or loosing the focus, the host expects the module to send an notification |
| `log-policy` | Player | The host sets the policy of sending logs |
| `paging-mode` | Player | The host sets the way of presenting pages |
| `navigation-denied` | Player | In case of denied navigation, the host let the module know and expects some visualisation of problems |
| `variable-data` | Editor | The host needs information about variables inside the unit definition to create the coding scheme. | 

## Easy Create
If you like to create metadata for your own Verona module, please go to [this website](https://skohub.io/editor/?schema=https://raw.githubusercontent.com/verona-interfaces/metadata/master/verona-module-metadata.json). Just fill out the form and copy&paste the metadata into your code. The data will be validated when you click "Publish".
