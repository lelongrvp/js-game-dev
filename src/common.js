import kaplay from "kaplay";

export const k = kaplay({
  width: 1280,
  height: 720,
});

export const environmentLoad = () => {
  k.loadBean();
  k.setGravity(1000);
};
