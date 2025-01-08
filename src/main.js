import kaplay from "kaplay";

const k = kaplay({
  width: 1280,
  height: 720,
});

k.loadBean();
k.setGravity(1000);

k.scene("game", () => {
  const playerEntities = [
    k.sprite("bean"),
    k.pos(k.center()),
    k.area(),
    k.body(),
  ];

  const player = k.add(playerEntities);

  const platformEntities = [
    k.rect(k.width(), 100),
    k.pos(0, k.height() - 100),
    k.outline(4),
    k.area(),
    k.body({
      isStatic: true,
    }),
    k.color(127, 200, 500),
  ];

  const platform = k.add(platformEntities);

  const createObstacle = () => [
    k.rect(48, k.rand(24, 96)),
    k.outline(3),
    k.color(
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ),
    k.area(),
    k.pos(k.width(), k.height() - platform.height),
    k.anchor("botleft"),
    k.move(LEFT, 240),
    "obstacle",
  ];

  const spawnObstacle = () => {
    k.add(createObstacle());
    k.wait(k.rand(1, 2.5), () => {
      spawnObstacle();
    });
  };

  spawnObstacle();

  player.onKeyPress("space", () => {
    if (player.isGrounded()) player.jump();
  });

  let score = 0;
  const scoreDisplay = k.add([k.text(score), k.pos(24, 24)]);

  k.onUpdate(() => {
    score++;
    scoreDisplay.text = score;
  });

  player.onCollide("obstacle", () => {
    k.addKaboom(player.pos);
    k.shake();
    k.go("lose", score);
  });
});

k.scene("lose", (score) => {
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

  onKeyPress("space", () => go("game"));
  onClick(() => go("game"));
});

k.go("game");
