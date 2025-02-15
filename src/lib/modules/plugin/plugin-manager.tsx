import { PageEditorStateType } from "../page-editor/page-editor";
import { StreamBase } from "../stream/stream-base";



export type PageEditorPlugin = {
  name: string;
  components: any[];
  onCreate: (editorState: PageEditorStateType) => any;
  onExit: (editorState: any) => any;
  onEditorInit: (editorState: any) => any;
  afterSaveMarkup: (finalMarkup:string) => string;
  afterSavePageState: (pageState:PageEditorStateType) => PageEditorStateType;
  onPreview: (editorState: any) => any;
  onEditModeChange: (editorState: any) => any;
  onComponentAdd: (editorState: any) => any;
  onComponentDelete: (editorState: any) => any;
  onComponentMove: (editorState: any) => any;
  onStreamAdd: (stream: StreamBase) => any;
  onStreamSave: (stream: StreamBase) => any;
  onStreamDelete: (stream: StreamBase) => any;
}

export class PluginManager {
  protected plugins: PageEditorPlugin[] = [];

  constructor(plugins: PageEditorPlugin[]) {
    this.plugins = plugins;
  }

  public getPlugins() {
    return this.plugins;
  }

    public addPlugin(plugin: PageEditorPlugin) {
        this.plugins.push(plugin);
    }

    public removePlugin(plugin: PageEditorPlugin) {
        this.plugins = this.plugins.filter((p) => p.name !== plugin.name);
    }

    public callForAllPlugins = (method: string, ...params) => {
        this.plugins.forEach((plugin) => {
            plugin[method](...params);
        });
    }

    public onEditorInit(editorState: PageEditorStateType) {
        this.callForAllPlugins("onEditorInit", editorState);
    }

    public onCreate(editorState: PageEditorStateType) {
        this.callForAllPlugins("onCreate", editorState);
    }

    public onExit(editorState: PageEditorStateType) {
        this.callForAllPlugins("onExit", editorState);
    }

    public afterSaveMarkup(finalMarkup: string) {
        this.callForAllPlugins("afterSaveMarkup", finalMarkup);
    }

    public afterSavePageState(pageState: PageEditorStateType) {
        this.callForAllPlugins("afterSavePageState", pageState);
    }

    public onPreview(editorState: PageEditorStateType) {
        this.callForAllPlugins("onPreview", editorState);
    }

    public onEditModeChange(editorState: PageEditorStateType) {
        this.callForAllPlugins("onEditModeChange", editorState);
    }

    public onComponentAdd(editorState: PageEditorStateType) {
        this.callForAllPlugins("onComponentAdd", editorState);
    }

    public onComponentDelete(editorState: PageEditorStateType) {
        this.callForAllPlugins("onComponentDelete", editorState);
    }

    public onComponentMove(editorState: PageEditorStateType) {
        this.callForAllPlugins("onComponentMove", editorState);
    }

    public onStreamAdd(stream: StreamBase) {
        this.callForAllPlugins("onStreamAdd", stream);
    }

    public onStreamSave(stream: StreamBase) {
        this.callForAllPlugins("onStreamSave", stream);
    }

    public onStreamDelete(stream: StreamBase) {
        this.callForAllPlugins("onStreamDelete", stream);
    }





}