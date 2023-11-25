function calculateVolumeAndArea(a) {
  if (a != null && !isNaN(a)) {
    console.log(`Объем куба: ${a*a*a}, площадь всей поверхности: ${a*a*6}`);
  }
   console.log('При вычислении произошла ошибка');
}

calculateVolumeAndArea(5);