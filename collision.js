
function intersect(a, b) {
  var aLeft = a.x;
  var aTop = a.y;
  var aRight = a.x + a.width;
  var aBottom = a.y + a.height;

  var bLeft = b.x;
  var bTop = b.y;
  var bRight = b.x + b.width;
  var bBottom = b.y + b.height;

  return !(
    aLeft > bRight ||
    aRight < bLeft ||
    aTop > bBottom ||
    aBottom < bTop
  );

 

}
