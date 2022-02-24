const fs = require('fs');
//Dosya Oluşturma ve içine {"name": "Employee 1 Name", "salary": 2000} Bilgisinin Yazılması
fs.writeFile('employees.json', {"name": "Employee 1 Name", "salary": 2000},'utf-8',(err)=>{
    if(err)console.log(err);
});
//employees.json içindeki bilgileri getirmek
fs.readFile('employees.json', 'utf8', (err, data) => { 
    if (err) console.log(err);                        
    console.log(data);                                 
  })
//employees.json içine alt satıra {"name": "Employee 2 Name", "salary": 3000} bilgilerini eklemek
fs.appendFile('employees.json', '\n {"name": "Employee 2 Name", "salary": 3000}', 'utf8', (err) => {
    if (err) console.log(err);
});
//Dosyayı Silmek
  fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
})