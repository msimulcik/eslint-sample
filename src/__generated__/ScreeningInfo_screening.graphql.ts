/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type ScreeningInfo_screening$ref = any;
export type ScreeningInfo_screening = {
    readonly name: string | null;
    readonly " $refType": ScreeningInfo_screening$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ScreeningInfo_screening",
  "type": "Screening",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '5e6eef90e502fffeb5a242b25da95bf8';
export default node;
