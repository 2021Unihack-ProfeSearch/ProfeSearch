
export default function parseDate(UTCDateString) {
  // if (!UTCDateString) {
  //   return '-';
  // }
  // function formatFunc(str) {
  //   return str > 9 ? str : '0' + str
  // }
  // var date2 = new Date(UTCDateString);
  // var year = date2.getFullYear();
  // var mon = formatFunc(date2.getMonth() + 1);
  // var day = formatFunc(date2.getDate());
  // // var hour = date2.getHours();
  // // var noon = hour >= 12 ? 'PM' : 'AM'; // 判断是上午还是下午
  // // hour = hour >= 12 ? hour - 12 : hour; // 12小时制
  // // hour = formatFunc(hour);
  // // var min = formatFunc(date2.getMinutes());
  // // var sec = formatFunc(date2.getSeconds());
  // var dateStr = year + '-' + mon + '-' + day + ' ' + hour + ':' + min + ':' + sec;
  // return dateStr;
  return UTCDateString.substr(0, 10);
}
