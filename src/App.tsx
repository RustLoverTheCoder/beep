import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="w-full h-full flex flex-col border-t">
      <div class="flex flex-1">
        <div class="w-12 h-full border-r"></div>
        <div class="w-75 h-full border-r"></div>
        <div class="flex-1"></div>
      </div>
      <div class="w-full h-5 border-t"></div>
    </div>
  );
};

export default App;
