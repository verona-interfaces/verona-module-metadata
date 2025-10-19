
    const schema = {
  "asyncapi": "2.5.0",
  "info": {
    "title": "verona-module-metadata",
    "description": "Specification for metadata to be placed in every verona module.",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of verona-interfaces (German only)",
      "url": "https://verona-interfaces.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "subscribe": {
        "operationId": "Please select one schema",
        "message": {
          "messageId": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      }
    }
  },
  "components": {
    "schemas": {
      "survey-content-index": {
        "$id": "verona-module-metadata@3.0",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Verona Module Metadata",
        "type": "object",
        "properties": {
          "type": {
            "title": "Verona Module Type",
            "type": "string",
            "enum": [
              "EDITOR",
              "PLAYER",
              "SCHEMER",
              "WIDGET_CALC",
              "WIDGET_PERIODIC_TABLE",
              "WIDGET_MOLECULE_EDITOR"
            ],
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "id": {
            "title": "Identifier",
            "description": "The id will be used as reference by any application using this module",
            "type": "string",
            "pattern": "^[A-Za-z][A-Za-z0-9_-]*$",
            "x-parser-schema-id": "<anonymous-schema-2>"
          },
          "name": {
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
                  ],
                  "x-parser-schema-id": "<anonymous-schema-5>"
                },
                "value": {
                  "type": "string",
                  "title": "Value",
                  "minLength": 1,
                  "x-parser-schema-id": "<anonymous-schema-6>"
                }
              },
              "additionalProperties": false,
              "required": [
                "lang",
                "value"
              ],
              "x-parser-schema-id": "<anonymous-schema-4>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-3>"
          },
          "description": "$ref:$.components.schemas.survey-content-index.properties.name",
          "version": {
            "title": "Version in SemVer2 notation",
            "description": "Semantic Versioning 2.0.0 required (MAJOR.MINOR.PATCH).",
            "type": "string",
            "pattern": "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
            "examples": [
              "1.5.2",
              "0.12.4-beta",
              "12.0.0-rc.1"
            ],
            "x-parser-schema-id": "<anonymous-schema-7>"
          },
          "specVersion": {
            "title": "Version of Supported Module Specification",
            "description": "Version of the Verona specification supported by this module in the form 'MAJOR.MINOR'.",
            "type": "string",
            "pattern": "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)$",
            "examples": [
              "1.5",
              "4.12"
            ],
            "x-parser-schema-id": "<anonymous-schema-8>"
          },
          "metadataVersion": {
            "title": "Version of Supported Metadata Specification",
            "description": "Version of the Verona Metadata specification supported by this metadata in the form of 'MAJOR.MINOR'.",
            "type": "string",
            "pattern": "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)$",
            "examples": [
              "1.5",
              "4.12"
            ],
            "x-parser-schema-id": "<anonymous-schema-9>"
          },
          "dependencies": {
            "title": "Dependencies",
            "description": "Packages needed during runtime.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "title": "Id of the package or service",
                  "description": "Used to load or access on demand.",
                  "x-parser-schema-id": "<anonymous-schema-12>"
                },
                "description": {
                  "type": "string",
                  "title": "Description",
                  "description": "Helps to understand the function of the package or service.",
                  "x-parser-schema-id": "<anonymous-schema-13>"
                },
                "type": {
                  "title": "Dependency Type",
                  "type": "string",
                  "description": "Type of dependency. This helps to find and access the dependency.",
                  "enum": [
                    "FILE",
                    "WIDGET",
                    "SERVICE"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-14>"
                },
                "required": {
                  "type": "boolean",
                  "title": "Required",
                  "description": "States whether this packages or service is needed for all use cases of the Verona module or only for some special use cases.",
                  "default": false,
                  "x-parser-schema-id": "<anonymous-schema-15>"
                }
              },
              "additionalProperties": false,
              "required": [
                "id",
                "type"
              ],
              "x-parser-schema-id": "<anonymous-schema-11>"
            },
            "x-parser-schema-id": "<anonymous-schema-10>"
          },
          "maintainer": {
            "title": "Maintainer",
            "description": "Maintainer of the verona module",
            "type": "object",
            "properties": {
              "name": "$ref:$.components.schemas.survey-content-index.properties.name",
              "url": {
                "title": "URL",
                "type": "string",
                "format": "uri",
                "x-parser-schema-id": "<anonymous-schema-17>"
              },
              "email": {
                "title": "Email",
                "type": "string",
                "format": "email",
                "x-parser-schema-id": "<anonymous-schema-18>"
              }
            },
            "additionalProperties": false,
            "x-parser-schema-id": "<anonymous-schema-16>"
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
                ],
                "x-parser-schema-id": "<anonymous-schema-20>"
              },
              "repositoryUrl": {
                "title": "Repository Url",
                "type": "string",
                "format": "uri",
                "x-parser-schema-id": "<anonymous-schema-21>"
              },
              "licenseType": {
                "title": "License Type",
                "type": "string",
                "default": "MIT",
                "examples": [
                  "BSD-3-Clause",
                  "ISC"
                ],
                "x-parser-schema-id": "<anonymous-schema-22>"
              },
              "licenseUrl": {
                "title": "License Url",
                "type": "string",
                "format": "uri",
                "default": "https://opensource.org/licenses/MIT",
                "x-parser-schema-id": "<anonymous-schema-23>"
              }
            },
            "additionalProperties": false,
            "x-parser-schema-id": "<anonymous-schema-19>"
          }
        },
        "additionalProperties": false,
        "required": [
          "id",
          "version",
          "type",
          "name",
          "specVersion",
          "metadataVersion"
        ],
        "$defs": {
          "languageTaggedStrings": "$ref:$.components.schemas.survey-content-index.properties.name",
          "dependency": "$ref:$.components.schemas.survey-content-index.properties.dependencies.items"
        },
        "x-parser-schema-id": "verona-module-metadata@3.0"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  