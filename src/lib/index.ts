import "../sass/app.scss";
import { PageEditorApp } from "./modules/page-editor/page-editor-app";
import { PageEditor } from "./modules/page-editor/page-editor";
import componentList from "./modules/page-editor/page-editor-components";
import { ContentSection } from "./modules/input-slot/content-section/input-slot-content-section";
import EditorValue from "./modules/input-slot/editor-value/input-slot-editor-value";
import NumberSelect from "./modules/input-slot/number-select-input/input-slot-number-select-input";
import RichText from "./modules/input-slot/rich-text-input/input-slot-rich-text-input";
import SelectInput from "./modules/input-slot/select-input/input-slot-select-input";
import SlotSection from "./modules/input-slot/slot-section/input-slot-slot-section";
import { StringInput } from "./modules/input-slot/string-input/input-slot-string-input";
import InputSlot from "./modules/input-slot/input-slot";
import { StreamBase } from "./modules/stream/stream-base";
import { HTTPStream } from "./modules/stream/http/stream-http";
import type { HTTPStreamFields } from "./modules/stream/http/stream-http";
import { StreamDriver } from "./modules/stream/stream-driver";
import { StreamDrawerDriver } from "./modules/stream/drawer/stream-drawer-driver";
import { StreamGroup } from "./modules/stream/group/stream-group";
import { FakeStream } from "./modules/stream/fake/stream-fake";
import type { StreamContextType } from "./modules/stream/stream-context";
import {
  injectEditorContext,
  useEditorContext,
} from "./modules/input-slot/input-slot-hooks";
import * as preact from "preact";
import { EditorContext } from "./modules/content-editor/content-editor-editor-context";
import type { EditorContextType } from "./modules/content-editor/content-editor-editor-context";
import { StreamSelectButton } from "./modules/stream/select/stream-select";

// preact 1
// window["preact1"] = preact;
// console.log("preact1 new", preact);
export {
  PageEditor,
  componentList,
  HTTPStreamFields,
  ContentSection,
  EditorValue,
  StreamGroup,
  NumberSelect,
  RichText,
  StreamSelectButton,
  SelectInput,
  SlotSection,
  EditorContext,
  EditorContextType,
  StringInput,
  InputSlot,
  StreamBase,
  HTTPStream,
  StreamDriver,
  useEditorContext,
  injectEditorContext,
  StreamContextType,
  StreamDrawerDriver,
  FakeStream,
  PageEditorApp,
};

export default PageEditorApp;
