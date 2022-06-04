// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (dates, index) => {
  // buat array untuk wadah penyimpanan
  let result = [];
  
  if(index !== undefined){
    // kondisi index ditemukan
    // loping dates 
    for(let i=0; i<dates.length; i++){
      // isi array result dengan date dan parsing kedalam epoch time
      result.push(Date.parse(dates[i]));
    }
    // mengembalikan result sesuai dengan indexnya
    // kemudian dirubah menjadi string dan
    // di pangkas 3 digit terakhir
    return result[index].toString().slice(0, -3);
  } else {
    // kondisi ketika index tidak ditemukan
    for (let i = 0; i < dates.length; i++) {
      // push data kedalam array
      result.push(Date.parse(dates[i]).toString().slice(0, -3))
    }
    // mengembalikan seluruh data yang ada di array
    // sortind data dan kemudian
    // digabungkan menjadi 1 dipisahkan dengan -
    return result.sort().join("-")
  }
  
}

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
