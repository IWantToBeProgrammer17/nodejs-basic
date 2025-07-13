function ubahUangJajan(sekolah) {
  let uangjajan;

  if (sekolah === "SD") {
    uangjajan = 1000;
  } else if (sekolah === "SMP") {
    uangjajan = 3000;
  } else if (sekolah === "SMA") {
    uangjajan = 5000;
  } else if (sekolah === "UNIV") {
    uangjajan = 10000;
  }

  return uangjajan;
}

module.exports = {ubahUangJajan};