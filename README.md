## Usage

```
npm install
npm run lint
```

## Expected output

```
/Users/miro/Work/CEAI/eslint-samples/src/ScreeningInfo.tsx
  10:24  error  Unexpected any. Specify a different type                                                                                                                                                                                                                                                                           @typescript-eslint/no-explicit-any
   0:0   error  This queries for the field `title` but this file does not seem to use it directly. If a different file needs this information that file should export a fragment and colocate the query for the data with the usage.
If only interested in the existence of a record, __typename can be used without this warning  relay/unused-fields

✖ 2 problems (2 errors, 0 warnings)
```