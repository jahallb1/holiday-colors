var e = function (e) {
  for (
    var t = e.date,
      a = e.defaultTheme,
      r = e.temporaryThemes,
      n = t || new Date(),
      g = 0;
    g < r.length;
    g++
  ) {
    var D = r[g],
      h = D.startDate,
      o = D.endDate,
      f = D.theme;
    if (
      n.getMonth() === h.getMonth() &&
      n.getDate() >= h.getDate() &&
      n.getDate() < o.getDate()
    )
      return f;
  }
  return a;
};
export { e as createTheme };
