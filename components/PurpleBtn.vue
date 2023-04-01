<template>
    <button class="neon-button-5">Click me!</button>
</template>

<style scoped>
/* Fifth Button */
.neon-button-5 {
  margin: 3%;
  display: inline-block;
  padding: 12px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  border: none;
  border-radius: 25px;
  background-color: #000;
  box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00,
    0 0 40px #00ff00, 0 0 70px #00ff00, 0 0 80px #00ff00, 0 0 100px #00ff00;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
}

.neon-button-5::before,
.neon-button-5::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  opacity: 0;
  z-index: -1;
  transition: all 0.3s ease;
}

.neon-button-5::before {
  top: 0;
  left: 0;
  background-color: #00ff00;
  transform: scale(0.8);
}

.neon-button-5::after {
  bottom: 0;
  right: 0;
  background-color: #ff00ff;
  transform: scale(0.8);
}

.neon-button-5:hover {
  box-shadow: none;
  transform: translateY(4px);
}

.neon-button-5:hover::before,
.neon-button-5:hover::after {
  opacity: 1;
  transform: scale(1);
}
</style>