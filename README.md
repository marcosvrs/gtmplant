# gtmplant
GTM to PlantUML

Will convert a export GTM container file to a PlantUML file.

## Usage

```
npm install --global gtmplant
gtmplant --input test/data/cookiebotGDPRConsentRecipe.json --output test/data/cookiebotGDPRConsentRecipe.puml
```

## Options

You can personalize your output, using the following options, to choose which component and/or usage you want to output.
If no component/usage is choose, all components/usages are outputed.

For example:
```
gtmplant --input test/data/cookiebotGDPRConsentRecipe.json --tags --variables --usages
```
Will output all Tags, Variables and the usage between them.

```
gtmplant --input test/data/cookiebotGDPRConsentRecipe.json
```
Will output all Tags, Triggers, Variables and the usage between them.

### -i, --input <path>
    Define the path of the exported GTM container file (JSON)

### -o, --output <path>
    Define the path of the output file. If not defined, it'll output on the STDOUT

### -T, --tags
    Convert tags

### -R, --triggers
    Convert triggers

### -R, --triggers
    Convert triggers

### -V, --variables
    Convert variables

### -U, --usages
    Generate usages