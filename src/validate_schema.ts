// tslint:disable:no-http-string max-line-length object-literal-sort-keys
export const validateSchema: object = {
    definitions: {},
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://example.com/root.json",
    type: "object",
    title: "Google Tag Manager Container Schema",
    required: [
        "exportFormatVersion",
        "exportTime",
        "containerVersion",
    ],
    properties: {
        exportFormatVersion: {
            $id: "#/properties/exportFormatVersion",
            type: "integer",
            title: "The Exportformatversion Schema",
            default: 0,
            examples: [
                2,
            ],
            pattern: "2",
        },
        exportTime: {
            $id: "#/properties/exportTime",
            type: "string",
            title: "The Exporttime Schema",
            default: "",
            examples: [
                "2018-02-15 09:45:11",
            ],
            pattern: "^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})$",
        },
        containerVersion: {
            $id: "#/properties/containerVersion",
            type: "object",
            title: "The Containerversion Schema",
            required: [
                "accountId",
                "containerId",
                "containerVersionId",
                "container",
                "fingerprint",
            ],
            properties: {
                path: {
                    $id: "#/properties/containerVersion/properties/path",
                    type: "string",
                    title: "The Path Schema",
                    default: "",
                    examples: [
                        "accounts/124588580/containers/6899612/versions/2",
                    ],
                    pattern: "^(.*)$",
                },
                accountId: {
                    $id: "#/properties/containerVersion/properties/accountId",
                    type: "string",
                    title: "The Accountid Schema",
                    default: "",
                    examples: [
                        "124588580",
                    ],
                    pattern: "^\\d+$",
                },
                containerId: {
                    $id: "#/properties/containerVersion/properties/containerId",
                    type: "string",
                    title: "The Containerid Schema",
                    default: "",
                    examples: [
                        "6899612",
                    ],
                    pattern: "^\\d+$",
                },
                containerVersionId: {
                    $id: "#/properties/containerVersion/properties/containerVersionId",
                    type: "string",
                    title: "The Containerversionid Schema",
                    default: "",
                    examples: [
                        "2",
                    ],
                    pattern: "^\\d$",
                },
                name: {
                    $id: "#/properties/containerVersion/properties/name",
                    type: "string",
                    title: "The Name Schema",
                    default: "",
                    examples: [
                        "Version 1.0",
                    ],
                    pattern: "^Version \\d\\.\\d$",
                },
                description: {
                    $id: "#/properties/containerVersion/properties/description",
                    type: "string",
                    title: "The Description Schema",
                    default: "",
                    examples: [
                        "1st release",
                    ],
                    pattern: "^(.*)$",
                },
                container: {
                    $id: "#/properties/containerVersion/properties/container",
                    type: "object",
                    title: "The Container Schema",
                    required: [
                        "accountId",
                        "containerId",
                        "name",
                        "publicId",
                        "usageContext",
                        "fingerprint",
                    ],
                    properties: {
                        path: {
                            $id: "#/properties/containerVersion/properties/container/properties/path",
                            type: "string",
                            title: "The Path Schema",
                            default: "",
                            examples: [
                                "accounts/124588580/containers/6899612",
                            ],
                            pattern: "^(.*)$",
                        },
                        accountId: {
                            $id: "#/properties/containerVersion/properties/container/properties/accountId",
                            type: "string",
                            title: "The Accountid Schema",
                            default: "",
                            examples: [
                                "124588580",
                            ],
                            pattern: "^\\d+$",
                        },
                        containerId: {
                            $id: "#/properties/containerVersion/properties/container/properties/containerId",
                            type: "string",
                            title: "The Containerid Schema",
                            default: "",
                            examples: [
                                "6899612",
                            ],
                            pattern: "^\\d+$",
                        },
                        name: {
                            $id: "#/properties/containerVersion/properties/container/properties/name",
                            type: "string",
                            title: "The Name Schema",
                            default: "",
                            examples: [
                                "gtm4wp container - WIP",
                            ],
                            pattern: "^(.*)$",
                        },
                        publicId: {
                            $id: "#/properties/containerVersion/properties/container/properties/publicId",
                            type: "string",
                            title: "The Publicid Schema",
                            default: "",
                            examples: [
                                "GTM-WRMHSB8",
                            ],
                            pattern: "^GTM\\-[\\w\\d]+$",
                        },
                        usageContext: {
                            $id: "#/properties/containerVersion/properties/container/properties/usageContext",
                            type: "array",
                            title: "The Usagecontext Schema",
                            items: {
                                $id: "#/properties/containerVersion/properties/container/properties/usageContext/items",
                                type: "string",
                                title: "The Items Schema",
                                default: "",
                                examples: [
                                    "WEB",
                                ],
                                pattern: "^\\w+$",
                            },
                        },
                        fingerprint: {
                            $id: "#/properties/containerVersion/properties/container/properties/fingerprint",
                            type: "string",
                            title: "The Fingerprint Schema",
                            default: "",
                            examples: [
                                "1518687838097",
                            ],
                            pattern: "^\\d+$",
                        },
                        tagManagerUrl: {
                            $id: "#/properties/containerVersion/properties/container/properties/tagManagerUrl",
                            type: "string",
                            title: "The Tagmanagerurl Schema",
                            default: "",
                            examples: [
                                "https://tagmanager.google.com/#/container/accounts/124588580/containers/6899612/workspaces?apiLink=container",
                            ],
                            pattern: "^(.*)$",
                        },
                    },
                },
                tag: {
                    $id: "#/properties/containerVersion/properties/tag",
                    type: "array",
                    title: "The Tag Schema",
                    items: {
                        $id: "#/properties/containerVersion/properties/tag/items",
                        type: "object",
                        title: "The Items Schema",
                        required: [
                            "accountId",
                            "containerId",
                            "tagId",
                            "name",
                            "type",
                            "parameter",
                            "fingerprint",
                        ],
                        properties: {
                            accountId: {
                                $id: "#/properties/containerVersion/properties/tag/items/properties/accountId",
                                type: "string",
                                title: "The Accountid Schema",
                                default: "",
                                examples: [
                                    "124588580",
                                ],
                                pattern: "^\\d+$",
                            },
                            containerId: {
                                $id: "#/properties/containerVersion/properties/tag/items/properties/containerId",
                                type: "string",
                                title: "The Containerid Schema",
                                default: "",
                                examples: [
                                    "6899612",
                                ],
                                pattern: "^\\d+$",
                            },
                            tagId: {
                                $id: "#/properties/containerVersion/properties/tag/items/properties/tagId",
                                type: "string",
                                title: "The Tagid Schema",
                                default: "",
                                examples: [
                                    "7",
                                ],
                                pattern: "^\\d+$",
                            },
                            name: {
                                $id: "#/properties/containerVersion/properties/tag/items/properties/name",
                                type: "string",
                                title: "The Name Schema",
                                default: "",
                                examples: [
                                    "UA Contact Form 7 Submit",
                                ],
                                pattern: "^(.*)$",
                            },
                            type: {
                                $id: "#/properties/containerVersion/properties/tag/items/properties/type",
                                type: "string",
                                title: "The Type Schema",
                                default: "",
                                examples: [
                                    "ua",
                                ],
                                pattern: "^\\w+$",
                            },
                            parameter: {
                                $id: "#/properties/containerVersion/properties/tag/items/properties/parameter",
                                type: "array",
                                title: "The Parameter Schema",
                                items: {
                                    $id: "#/properties/containerVersion/properties/tag/items/properties/parameter/items",
                                    type: "object",
                                    title: "The Items Schema",
                                    required: [
                                        "type",
                                        "key",
                                    ],
                                    properties: {
                                        type: {
                                            $id: "#/properties/containerVersion/properties/tag/items/properties/parameter/items/properties/type",
                                            type: "string",
                                            title: "The Type Schema",
                                            default: "",
                                            examples: [
                                                "BOOLEAN",
                                            ],
                                            pattern: "^\\w+$",
                                        },
                                        key: {
                                            $id: "#/properties/containerVersion/properties/tag/items/properties/parameter/items/properties/key",
                                            type: "string",
                                            title: "The Key Schema",
                                            default: "",
                                            examples: [
                                                "nonInteraction",
                                            ],
                                            pattern: "^\\w+$",
                                        },
                                        value: {
                                            $id: "#/properties/containerVersion/properties/tag/items/properties/parameter/items/properties/value",
                                            type: "string",
                                            title: "The Value Schema",
                                            default: "",
                                            examples: [
                                                "false",
                                            ],
                                            pattern: "(.*)",
                                        },
                                    },
                                },
                            },
                            fingerprint: {
                                $id: "#/properties/containerVersion/properties/tag/items/properties/fingerprint",
                                type: "string",
                                title: "The Fingerprint Schema",
                                default: "",
                                examples: [
                                    "1518683189823",
                                ],
                                pattern: "^\\d+$",
                            },
                            firingTriggerId: {
                                $id: "#/properties/containerVersion/properties/tag/items/properties/firingTriggerId",
                                type: "array",
                                title: "The Firingtriggerid Schema",
                                items: {
                                    $id: "#/properties/containerVersion/properties/tag/items/properties/firingTriggerId/items",
                                    type: "string",
                                    title: "The Items Schema",
                                    default: "",
                                    examples: [
                                        "12",
                                    ],
                                    pattern: "^\\d+$",
                                },
                            },
                            parentFolderId: {
                                $id: "#/properties/containerVersion/properties/tag/items/properties/parentFolderId",
                                type: "string",
                                title: "The Parentfolderid Schema",
                                default: "",
                                examples: [
                                    "14",
                                ],
                                pattern: "^\\d+$",
                            },
                            tagFiringOption: {
                                $id: "#/properties/containerVersion/properties/tag/items/properties/tagFiringOption",
                                type: "string",
                                title: "The Tagfiringoption Schema",
                                default: "",
                                examples: [
                                    "ONCE_PER_EVENT",
                                ],
                                pattern: "^\\w+$",
                            },
                        },
                    },
                },
                trigger: {
                    $id: "#/properties/containerVersion/properties/trigger",
                    type: "array",
                    title: "The Trigger Schema",
                    items: {
                        $id: "#/properties/containerVersion/properties/trigger/items",
                        type: "object",
                        title: "The Items Schema",
                        required: [
                            "accountId",
                            "containerId",
                            "triggerId",
                            "name",
                            "type",
                            "fingerprint",
                        ],
                        properties: {
                            accountId: {
                                $id: "#/properties/containerVersion/properties/trigger/items/properties/accountId",
                                type: "string",
                                title: "The Accountid Schema",
                                default: "",
                                examples: [
                                    "124588580",
                                ],
                                pattern: "^\\d+$",
                            },
                            containerId: {
                                $id: "#/properties/containerVersion/properties/trigger/items/properties/containerId",
                                type: "string",
                                title: "The Containerid Schema",
                                default: "",
                                examples: [
                                    "6899612",
                                ],
                                pattern: "^\\d+$",
                            },
                            triggerId: {
                                $id: "#/properties/containerVersion/properties/trigger/items/properties/triggerId",
                                type: "string",
                                title: "The Triggerid Schema",
                                default: "",
                                examples: [
                                    "12",
                                ],
                                pattern: "^\\d+$",
                            },
                            name: {
                                $id: "#/properties/containerVersion/properties/trigger/items/properties/name",
                                type: "string",
                                title: "The Name Schema",
                                default: "",
                                examples: [
                                    "Contact Form 7 Submitted",
                                ],
                                pattern: "^(.*)$",
                            },
                            type: {
                                $id: "#/properties/containerVersion/properties/trigger/items/properties/type",
                                type: "string",
                                title: "The Type Schema",
                                default: "",
                                examples: [
                                    "CUSTOM_EVENT",
                                ],
                                pattern: "^\\w+$",
                            },
                            customEventFilter: {
                                $id: "#/properties/containerVersion/properties/trigger/items/properties/customEventFilter",
                                type: "array",
                                title: "The Customeventfilter Schema",
                                items: {
                                    $id: "#/properties/containerVersion/properties/trigger/items/properties/customEventFilter/items",
                                    type: "object",
                                    title: "The Items Schema",
                                    required: [
                                        "type",
                                        "parameter",
                                    ],
                                    properties: {
                                        type: {
                                            $id: "#/properties/containerVersion/properties/trigger/items/properties/customEventFilter/items/properties/type",
                                            type: "string",
                                            title: "The Type Schema",
                                            default: "",
                                            examples: [
                                                "EQUALS",
                                            ],
                                            pattern: "^\\w+$",
                                        },
                                        parameter: {
                                            $id: "#/properties/containerVersion/properties/trigger/items/properties/customEventFilter/items/properties/parameter",
                                            type: "array",
                                            title: "The Parameter Schema",
                                            items: {
                                                $id: "#/properties/containerVersion/properties/trigger/items/properties/customEventFilter/items/properties/parameter/items",
                                                type: "object",
                                                title: "The Items Schema",
                                                required: [
                                                    "type",
                                                    "key",
                                                    "value",
                                                ],
                                                properties: {
                                                    type: {
                                                        $id: "#/properties/containerVersion/properties/trigger/items/properties/customEventFilter/items/properties/parameter/items/properties/type",
                                                        type: "string",
                                                        title: "The Type Schema",
                                                        default: "",
                                                        examples: [
                                                            "TEMPLATE",
                                                        ],
                                                        pattern: "^\\w+$",
                                                    },
                                                    key: {
                                                        $id: "#/properties/containerVersion/properties/trigger/items/properties/customEventFilter/items/properties/parameter/items/properties/key",
                                                        type: "string",
                                                        title: "The Key Schema",
                                                        default: "",
                                                        examples: [
                                                            "arg0",
                                                        ],
                                                        pattern: "^[\\w\\d]+$",
                                                    },
                                                    value: {
                                                        $id: "#/properties/containerVersion/properties/trigger/items/properties/customEventFilter/items/properties/parameter/items/properties/value",
                                                        type: "string",
                                                        title: "The Value Schema",
                                                        default: "",
                                                        examples: [
                                                            "{{_event}}",
                                                        ],
                                                        pattern: "^(.*)$",
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            filter: {
                                $id: "#/properties/containerVersion/properties/trigger/items/properties/filter",
                                type: "array",
                                title: "The Filter Schema",
                                items: {
                                    $id: "#/properties/containerVersion/properties/trigger/items/properties/filter/items",
                                    type: "object",
                                    title: "The Items Schema",
                                    required: [
                                        "type",
                                        "parameter",
                                    ],
                                    properties: {
                                        type: {
                                            $id: "#/properties/containerVersion/properties/trigger/items/properties/filter/items/properties/type",
                                            type: "string",
                                            title: "The Type Schema",
                                            default: "",
                                            examples: [
                                                "GREATER_OR_EQUALS",
                                            ],
                                            pattern: "^\\w+$",
                                        },
                                        parameter: {
                                            $id: "#/properties/containerVersion/properties/trigger/items/properties/filter/items/properties/parameter",
                                            type: "array",
                                            title: "The Parameter Schema",
                                            items: {
                                                $id: "#/properties/containerVersion/properties/trigger/items/properties/filter/items/properties/parameter/items",
                                                type: "object",
                                                title: "The Items Schema",
                                                required: [
                                                    "type",
                                                    "key",
                                                    "value",
                                                ],
                                                properties: {
                                                    type: {
                                                        $id: "#/properties/containerVersion/properties/trigger/items/properties/filter/items/properties/parameter/items/properties/type",
                                                        type: "string",
                                                        title: "The Type Schema",
                                                        default: "",
                                                        examples: [
                                                            "TEMPLATE",
                                                        ],
                                                        pattern: "^\\w+$",
                                                    },
                                                    key: {
                                                        $id: "#/properties/containerVersion/properties/trigger/items/properties/filter/items/properties/parameter/items/properties/key",
                                                        type: "string",
                                                        title: "The Key Schema",
                                                        default: "",
                                                        examples: [
                                                            "arg0",
                                                        ],
                                                        pattern: "^[\\w\\d]+$",
                                                    },
                                                    value: {
                                                        $id: "#/properties/containerVersion/properties/trigger/items/properties/filter/items/properties/parameter/items/properties/value",
                                                        type: "string",
                                                        title: "The Value Schema",
                                                        default: "",
                                                        examples: [
                                                            "{{Cookie - pageviewCount}}",
                                                        ],
                                                        pattern: "^(.*)$",
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            fingerprint: {
                                $id: "#/properties/containerVersion/properties/trigger/items/properties/fingerprint",
                                type: "string",
                                title: "The Fingerprint Schema",
                                default: "",
                                examples: [
                                    "1518683189825",
                                ],
                                pattern: "^\\d+$",
                            },
                            parentFolderId: {
                                $id: "#/properties/containerVersion/properties/trigger/items/properties/parentFolderId",
                                type: "string",
                                title: "The Parentfolderid Schema",
                                default: "",
                                examples: [
                                    "14",
                                ],
                                pattern: "^\\d+$",
                            },
                        },
                    },
                },
                variable: {
                    $id: "#/properties/containerVersion/properties/variable",
                    type: "array",
                    title: "The Variable Schema",
                    items: {
                        $id: "#/properties/containerVersion/properties/variable/items",
                        type: "object",
                        title: "The Items Schema",
                        required: [
                            "accountId",
                            "containerId",
                            "variableId",
                            "name",
                            "type",
                            "parameter",
                            "fingerprint",
                        ],
                        properties: {
                            accountId: {
                                $id: "#/properties/containerVersion/properties/variable/items/properties/accountId",
                                type: "string",
                                title: "The Accountid Schema",
                                default: "",
                                examples: [
                                    "124588580",
                                ],
                                pattern: "^\\d+$",
                            },
                            containerId: {
                                $id: "#/properties/containerVersion/properties/variable/items/properties/containerId",
                                type: "string",
                                title: "The Containerid Schema",
                                default: "",
                                examples: [
                                    "6899612",
                                ],
                                pattern: "^\\d+$",
                            },
                            variableId: {
                                $id: "#/properties/containerVersion/properties/variable/items/properties/variableId",
                                type: "string",
                                title: "The Variableid Schema",
                                default: "",
                                examples: [
                                    "1",
                                ],
                                pattern: "^\\d+$",
                            },
                            name: {
                                $id: "#/properties/containerVersion/properties/variable/items/properties/name",
                                type: "string",
                                title: "The Name Schema",
                                default: "",
                                examples: [
                                    "GA config - with ecommerce",
                                ],
                                pattern: "^(.*)$",
                            },
                            type: {
                                $id: "#/properties/containerVersion/properties/variable/items/properties/type",
                                type: "string",
                                title: "The Type Schema",
                                default: "",
                                examples: [
                                    "gas",
                                ],
                                pattern: "^\\w+$",
                            },
                            parameter: {
                                $id: "#/properties/containerVersion/properties/variable/items/properties/parameter",
                                type: "array",
                                title: "The Parameter Schema",
                                items: {
                                    $id: "#/properties/containerVersion/properties/variable/items/properties/parameter/items",
                                    type: "object",
                                    title: "The Items Schema",
                                    required: [
                                        "type",
                                        "key",
                                    ],
                                    properties: {
                                        type: {
                                            $id: "#/properties/containerVersion/properties/variable/items/properties/parameter/items/properties/type",
                                            type: "string",
                                            title: "The Type Schema",
                                            default: "",
                                            examples: [
                                                "TEMPLATE",
                                            ],
                                            pattern: "^\\w+$",
                                        },
                                        key: {
                                            $id: "#/properties/containerVersion/properties/variable/items/properties/parameter/items/properties/key",
                                            type: "string",
                                            title: "The Key Schema",
                                            default: "",
                                            examples: [
                                                "cookieDomain",
                                            ],
                                            pattern: "^\\w+$",
                                        },
                                        value: {
                                            $id: "#/properties/containerVersion/properties/variable/items/properties/parameter/items/properties/value",
                                            type: "string",
                                            title: "The Value Schema",
                                            default: "",
                                            examples: [
                                                "auto",
                                            ],
                                            pattern: "(.*)",
                                        },
                                    },
                                },
                            },
                            fingerprint: {
                                $id: "#/properties/containerVersion/properties/variable/items/properties/fingerprint",
                                type: "string",
                                title: "The Fingerprint Schema",
                                default: "",
                                examples: [
                                    "1518683189825",
                                ],
                                pattern: "^\\d+$",
                            },
                            parentFolderId: {
                                $id: "#/properties/containerVersion/properties/variable/items/properties/parentFolderId",
                                type: "string",
                                title: "The Parentfolderid Schema",
                                default: "",
                                examples: [
                                    "14",
                                ],
                                pattern: "^\\d+$",
                            },
                        },
                    },
                },
                folder: {
                    $id: "#/properties/containerVersion/properties/folder",
                    type: "array",
                    title: "The Folder Schema",
                    items: {
                        $id: "#/properties/containerVersion/properties/folder/items",
                        type: "object",
                        title: "The Items Schema",
                        required: [
                            "accountId",
                            "containerId",
                            "folderId",
                            "name",
                            "fingerprint",
                        ],
                        properties: {
                            accountId: {
                                $id: "#/properties/containerVersion/properties/folder/items/properties/accountId",
                                type: "string",
                                title: "The Accountid Schema",
                                default: "",
                                examples: [
                                    "124588580",
                                ],
                                pattern: "^\\d+$",
                            },
                            containerId: {
                                $id: "#/properties/containerVersion/properties/folder/items/properties/containerId",
                                type: "string",
                                title: "The Containerid Schema",
                                default: "",
                                examples: [
                                    "6899612",
                                ],
                                pattern: "^\\d+$",
                            },
                            folderId: {
                                $id: "#/properties/containerVersion/properties/folder/items/properties/folderId",
                                type: "string",
                                title: "The Folderid Schema",
                                default: "",
                                examples: [
                                    "14",
                                ],
                                pattern: "^\\d+$",
                            },
                            name: {
                                $id: "#/properties/containerVersion/properties/folder/items/properties/name",
                                type: "string",
                                title: "The Name Schema",
                                default: "",
                                examples: [
                                    "GTM4WP",
                                ],
                                pattern: "^(.*)$",
                            },
                            fingerprint: {
                                $id: "#/properties/containerVersion/properties/folder/items/properties/fingerprint",
                                type: "string",
                                title: "The Fingerprint Schema",
                                default: "",
                                examples: [
                                    "1518683180054",
                                ],
                                pattern: "^\\d+$",
                            },
                        },
                    },
                },
                builtInVariable: {
                    $id: "#/properties/containerVersion/properties/builtInVariable",
                    type: "array",
                    title: "The Builtinvariable Schema",
                    items: {
                        $id: "#/properties/containerVersion/properties/builtInVariable/items",
                        type: "object",
                        title: "The Items Schema",
                        required: [
                            "accountId",
                            "containerId",
                            "type",
                            "name",
                        ],
                        properties: {
                            accountId: {
                                $id: "#/properties/containerVersion/properties/builtInVariable/items/properties/accountId",
                                type: "string",
                                title: "The Accountid Schema",
                                default: "",
                                examples: [
                                    "124588580",
                                ],
                                pattern: "^\\d+$",
                            },
                            containerId: {
                                $id: "#/properties/containerVersion/properties/builtInVariable/items/properties/containerId",
                                type: "string",
                                title: "The Containerid Schema",
                                default: "",
                                examples: [
                                    "6899612",
                                ],
                                pattern: "^\\d+$",
                            },
                            type: {
                                $id: "#/properties/containerVersion/properties/builtInVariable/items/properties/type",
                                type: "string",
                                title: "The Type Schema",
                                default: "",
                                examples: [
                                    "PAGE_URL",
                                ],
                                pattern: "^\\w+$",
                            },
                            name: {
                                $id: "#/properties/containerVersion/properties/builtInVariable/items/properties/name",
                                type: "string",
                                title: "The Name Schema",
                                default: "",
                                examples: [
                                    "Page URL",
                                ],
                                pattern: "^(.*)$",
                            },
                        },
                    },
                },
                fingerprint: {
                    $id: "#/properties/containerVersion/properties/fingerprint",
                    type: "string",
                    title: "The Fingerprint Schema",
                    default: "",
                    examples: [
                        "1518687892025",
                    ],
                    pattern: "^\\d+$",
                },
                tagManagerUrl: {
                    $id: "#/properties/containerVersion/properties/tagManagerUrl",
                    type: "string",
                    title: "The Tagmanagerurl Schema",
                    default: "",
                    examples: [
                        "https://tagmanager.google.com/#/versions/accounts/124588580/containers/6899612/versions/2?apiLink=version",
                    ],
                    pattern: "^(.*)$",
                },
            },
        },
    },
};
