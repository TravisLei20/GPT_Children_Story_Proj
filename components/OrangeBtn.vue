<template>
    <button class="neon-button-3">Buy now</button>
</template>

<style scoped>
/* Third GPT Button */
.neon-button-3 {
  margin: 3%;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  border: none;
  border-radius: 30px;
  background: linear-gradient(90deg, #ff6b6b, #ffc44c);
  box-shadow: 0 0 10px #ff6b6b, 0 0 20px #ff6b6b, 0 0 30px #ff6b6b,
    0 0 40px #ffc44c, 0 0 70px #ffc44c, 0 0 80px #ffc44c, 0 0 100px #ffc44c;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.neon-button-3::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: linear-gradient(90deg, #ff6b6b, #ffc44c);
  filter: blur(20px);
  opacity: 0;
  z-index: -1;
  transition: all 0.3s ease;
}

.neon-button-3:hover {
  box-shadow: none;
  transform: translateY(4px);
}

.neon-button-3:hover::before {
  opacity: 1;
  filter: blur(40px);
}
</style>