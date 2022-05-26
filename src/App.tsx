import type { Component } from "solid-js";
import { editor } from "monaco-editor";
import { createEffect, createSignal } from "solid-js";

const App: Component = () => {
  createEffect(() => {
    editor.create(document.getElementById("container")!, {
      value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join(
        "\n"
      ),
      language: "javascript",
      theme: "vs-dark",
    });
  }, []);
  return (
    <div class="w-full h-full flex flex-col border-t border-white dark:border-gray-700 ">
      <div class="flex flex-1">
        <div class="w-18 h-full bg-tertiary"></div>
        <div class="w-75 h-full bg-secondary flex flex-col">
          <div class="w-full h-12 shadow"></div>
          <div class="flex-1"></div>
        </div>
        <div class="flex-1 bg-primary flex flex-col">
          <div class="w-full h-12 shadow"></div>
          <div class="flex-1" id="container"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
