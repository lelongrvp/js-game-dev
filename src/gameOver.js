import { k } from "./common";
import { game } from "./game";

export const gameOver = k.scene("lose", (score) => {
  add([
    sprite("bean"),
    pos(width() / 2, height() / 2 - 80),
    scale(2),
    anchor("center"),
  ]);

  add([
    text(score),
    pos(width() / 2, height() / 2 + 80),
    scale(2),
    anchor("center"),
  ]);

  onKeyPress("space", () => k.go("game"));
  onClick(() => k.go("game"));
});
