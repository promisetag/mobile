import { types } from "mobx-state-tree";

const DrawerStore = types
  .model({
    visible: false,
  })
  .actions((self) => ({
    toggle() {
      self.visible = !self.visible;
    },
    open() {
      self.visible = true;
    },
    close() {
      self.visible = false;
    },
  }));

export default DrawerStore;
