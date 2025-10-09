register("chat", (event) => {
    if (!Settings().autorequeue) return;
    if (chestopened == 0) {
        prefix("Everyone has opened their chest, requeuing...");
  }});

register("worldUnload", () => {
    chestopened = 0;
})