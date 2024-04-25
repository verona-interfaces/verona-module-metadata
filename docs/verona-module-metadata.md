

# Verona Module Metadata



<table>
<tbody>
<tr><th>\$id</th><td>https://raw.githubusercontent.com/verona-interfaces/metadata/master/verona-module-metadata.json</td></tr>
<tr><th>\$schema</th><td>http://json-schema.org/draft-07/schema#</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#type">type</a></td><td>String</td></tr><tr><td colspan="2"><a href="#id">id</a></td><td>String</td></tr><tr><td colspan="2"><a href="#name">name</a></td><td>Array</td></tr><tr><td colspan="2"><a href="#description">description</a></td><td>Array</td></tr><tr><td colspan="2"><a href="#version">version</a></td><td>String</td></tr><tr><td colspan="2"><a href="#specversion">specVersion</a></td><td>String</td></tr><tr><td colspan="2"><a href="#metadataversion">metadataVersion</a></td><td>String</td></tr><tr><td colspan="2"><a href="#notsupportedfeatures">notSupportedFeatures</a></td><td>Array</td></tr><tr><td colspan="2"><a href="#dependencies">dependencies</a></td><td>Array</td></tr><tr><td colspan="2"><a href="#maintainer">maintainer</a></td><td>Object</td></tr><tr><td colspan="2"><a href="#code">code</a></td><td>Object</td></tr></tbody></table>



<hr />


## type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Verona Module Type</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>editor</li><li>player</li><li>schemer</li><li>coder</li></ul></td>
    </tr>
  </tbody>
</table>




## id


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Identifier</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The id will be used as reference by any application using this module</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^[A-Za-z][A-Za-z0-9_-]*$</td>
    </tr>
  </tbody>
</table>




## name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Name</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Name to be used in lists or forms when the identifier is too short</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




## description


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Description</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">The description should include any use case and should refer to used data formats.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




## version


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Version in SemVer2 notation</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Semantic Versioning 2.0.0 required (MAJOR.MINOR.PATCH).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>1.5.2</li><li>0.12.4-beta</li><li>12.0.0-rc.1</li></td>
    </tr>
  </tbody>
</table>




## specVersion


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Version of Supported Module Specification</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Version of the Verona specification supported by this module in the form &#x27;MAJOR.MINOR&#x27;.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^(0|[1-9]\d*)\.(0|[1-9]\d*)$</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>1.5</li><li>4.12</li></td>
    </tr>
  </tbody>
</table>




## metadataVersion


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Version of Supported Metadata Specification</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Version of the Verona Metadata specification supported by this metadata in the form of &#x27;MAJOR.MINOR&#x27;.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^(0|[1-9]\d*)\.(0|[1-9]\d*)$</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>1.5</li><li>4.12</li></td>
    </tr>
  </tbody>
</table>




## notSupportedFeatures


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">List of all features not supported</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Use the predefined keys to name not supported features.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Unique Items</th>
      <td colspan="2">true</td>
    </tr><tr>
      <th>Min Items</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




## dependencies


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Dependencies</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Packages needed during runtime.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## maintainer


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Maintainer</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Maintainer of the verona module</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#maintainername">name</a></td><td>Array</td></tr><tr><td colspan="2"><a href="#maintainerurl">url</a></td><td>String</td></tr><tr><td colspan="2"><a href="#maintaineremail">email</a></td><td>String</td></tr></tbody></table>


### maintainer.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Name</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Name of maintainer</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### maintainer.url


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">URL</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">uri</td>
    </tr>
  </tbody>
</table>




### maintainer.email


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">E-Mail</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">email</td>
    </tr>
  </tbody>
</table>





## code


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Code</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Data about source code</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#coderepositorytype">repositoryType</a></td><td>String</td></tr><tr><td colspan="2"><a href="#coderepositoryurl">repositoryUrl</a></td><td>String</td></tr><tr><td colspan="2"><a href="#codelicensetype">licenseType</a></td><td>String</td></tr><tr><td colspan="2"><a href="#codelicenseurl">licenseUrl</a></td><td>String</td></tr></tbody></table>


### code.repositoryType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Repository Type</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Default</th>
      <td colspan="2">git</td>
    </tr>
    <tr>
      <th>Examples</th>
      <td colspan="2"><li>svn</li><li>mercurial</li></td>
    </tr>
  </tbody>
</table>




### code.repositoryUrl


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Repository Url</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">uri</td>
    </tr>
  </tbody>
</table>




### code.licenseType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">License Type</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Default</th>
      <td colspan="2">MIT</td>
    </tr>
    <tr>
      <th>Examples</th>
      <td colspan="2"><li>BSD-3-Clause</li><li>ISC</li></td>
    </tr>
  </tbody>
</table>




### code.licenseUrl


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">License Url</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Default</th>
      <td colspan="2">https://opensource.org/licenses/MIT</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">uri</td>
    </tr>
  </tbody>
</table>










<hr />

## Schema

:::{.column-page}

```json
{
    "$id": "https://raw.githubusercontent.com/verona-interfaces/metadata/master/verona-module-metadata.json",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Verona Module Metadata",
    "type": "object",
    "default": {
        "$schema": "https://raw.githubusercontent.com/verona-interfaces/metadata/master/verona-module-metadata.json"
    },
    "properties": {
        "type": {
            "title": "Verona Module Type",
            "type": "string",
            "enum": [
                "editor",
                "player",
                "schemer",
                "coder"
            ]
        },
        "id": {
            "title": "Identifier",
            "description": "The id will be used as reference by any application using this module",
            "type": "string",
            "pattern": "^[A-Za-z][A-Za-z0-9_-]*$"
        },
        "name": {
            "title": "Name",
            "description": "Name to be used in lists or forms when the identifier is too short",
            "$ref": "#/$defs/languageTaggedStrings"
        },
        "description": {
            "title": "Description",
            "description": "The description should include any use case and should refer to used data formats.",
            "$ref": "#/$defs/languageTaggedStrings"
        },
        "version": {
            "title": "Version in SemVer2 notation",
            "description": "Semantic Versioning 2.0.0 required (MAJOR.MINOR.PATCH).",
            "type": "string",
            "pattern": "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
            "examples": [
                "1.5.2",
                "0.12.4-beta",
                "12.0.0-rc.1"
            ]
        },
        "specVersion": {
            "title": "Version of Supported Module Specification",
            "description": "Version of the Verona specification supported by this module in the form 'MAJOR.MINOR'.",
            "type": "string",
            "pattern": "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)$",
            "examples": [
                "1.5",
                "4.12"
            ]
        },
        "metadataVersion": {
            "title": "Version of Supported Metadata Specification",
            "description": "Version of the Verona Metadata specification supported by this metadata in the form of 'MAJOR.MINOR'.",
            "type": "string",
            "pattern": "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)$",
            "examples": [
                "1.5",
                "4.12"
            ]
        },
        "notSupportedFeatures": {
            "title": "List of all features not supported",
            "description": "Use the predefined keys to name not supported features.",
            "type": "array",
            "items": {
                "type": "string",
                "enum": [
                    "focus-notify",
                    "log-policy",
                    "paging-mode",
                    "navigation-denied",
                    "variable-data"
                ]
            },
            "minItems": 1,
            "uniqueItems": true
        },
        "dependencies": {
            "title": "Dependencies",
            "description": "Packages needed during runtime.",
            "$ref": "#/$defs/dependencies"
        },
        "maintainer": {
            "title": "Maintainer",
            "description": "Maintainer of the verona module",
            "type": "object",
            "properties": {
                "name": {
                    "title": "Name",
                    "description": "Name of maintainer",
                    "$ref": "#/$defs/languageTaggedStrings"
                },
                "url": {
                    "title": "URL",
                    "type": "string",
                    "format": "uri"
                },
                "email": {
                    "title": "E-Mail",
                    "type": "string",
                    "format": "email"
                }
            }
        },
        "code": {
            "title": "Code",
            "description": "Data about source code",
            "type": "object",
            "properties": {
                "repositoryType": {
                    "title": "Repository Type",
                    "type": "string",
                    "default": "git",
                    "examples": [
                        "svn",
                        "mercurial"
                    ]
                },
                "repositoryUrl": {
                    "title": "Repository Url",
                    "type": "string",
                    "format": "uri"
                },
                "licenseType": {
                    "title": "License Type",
                    "type": "string",
                    "default": "MIT",
                    "examples": [
                        "BSD-3-Clause",
                        "ISC"
                    ]
                },
                "licenseUrl": {
                    "title": "License Url",
                    "type": "string",
                    "format": "uri",
                    "default": "https://opensource.org/licenses/MIT"
                }
            }
        }
    },
    "required": [
        "id",
        "version",
        "type",
        "name",
        "specVersion",
        "metadataVersion"
    ],
    "$defs": {
        "languageTaggedStrings": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "lang": {
                        "type": "string",
                        "title": "Language as ISO 639-1 Alpha-2 code",
                        "description": "This language code declares the language of the value.",
                        "pattern": "^[a-z]{2}$",
                        "default": "de",
                        "examples": [
                            "en",
                            "fr"
                        ]
                    },
                    "value": {
                        "type": "string",
                        "title": "Value",
                        "minLength": 1
                    }
                },
                "required": [
                    "value"
                ]
            },
            "minItems": 1
        },
        "dependencies": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string",
                        "title": "Id of the package or service",
                        "description": "Used to load or access on demand."
                    },
                    "description": {
                        "type": "string",
                        "title": "Description",
                        "description": "Helps to understand the function of the package or service."
                    },
                    "type": {
                        "title": "Dependency Type",
                        "type": "string",
                        "description": "File is to be provided along the module, service is an accessible url.",
                        "enum": [
                            "file",
                            "service"
                        ]
                    },
                    "required": {
                        "type": "boolean",
                        "title": "Required",
                        "description": "States whether this packages or service is needed for all use cases of the Verona module or only for some special use cases."
                    }
                },
                "required": [
                    "id",
                    "required",
                    "type"
                ]
            }
        }
    }
}
```


:::
