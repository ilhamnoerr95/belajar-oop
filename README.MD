```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```
----------------------------------------------------------------
<!-- OOP -->
CONSTRUCTOR ADALAH SEBUAH FUNGSI UNTUK MEMBUAT OBJECT BARU, KITA ANALOGIKAN BAHWA KONSTRUKTOR INI ADALAH BLUE PRINT DALAM PEMBUATAN SEBUAH ALAT
----------------------------------------------------------------
ADA BEBERAPA KONVENSI DALAM KONSTRUKTOR: 
1. PENAMAAN DARI FUNGSI KONSTRUKTOR MENGGUNAKA KAPITAL AGAK MEMBEDAKAN DENGAN FUNGSI LAINNYA
2. CONSTRUCTOR MENGGUNAKAN THIS DALAM MENSET PROPERTY OBJECT YG DIBUATNYA. THIS MENGACU PADA OBJECT BARU YG AKAN DIBUAT
3. Konstruktor mendefinisikan properti dan perilaku alih-alih mengembalikan nilai seperti fungsi lainnya.

------------------------------------------------------------------
note: this didalam konstruktor selalu mengacu pada object yg dibuat
```diff
+ maka dari itu new operator digunakan untuk memanggil constructor, di mana kita memintal js untuk membuat instance bar. Tanpa adanya new operator, this didalam konstruktor tidak akan menunjuk ke objek yg baru dibuat

----------------------------------------------------------------
@@ extend dari objek konstruktor@@
apabila dalam pembuatan konstruktor kita ingin menggunakan properti konstruktor dengan value berbeda, maka hal sederhana yg digunakan adalah set param pada fungsi constructorny
----------------------------------------------------------------
@@ verify object constructor with instanceof@@
+ instanceof memungkinkan kita dalam membandingkan antara object dengna constructor, dan hasil yg di return aalah boolean
----------------------------------------------------------------
@@ memahami propertinya @@
name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties.
----------------------------------------------------------------
@@ menggunanak Prototype properti untuk mengurangi duplikat kode@@
Pada dasarnya saat membuat konstruktor properti yg dibuat akan membentuk duplikat variable untuk semua instance yg dibuat.
ini sangat tidak efesien apabila setiap instance baru memiliki banyak properti/variable yg sama.
maka ada cara baik untuk menambhkan properti constructor sesuai kebutuhan, yaitu menggunakan prototype. Anggap prototype seperti resep untuk membuat objek baru/menambahkan properti objek baru.
@@ iterasi semua properti @@
apabila kita mengitarasi konstruktor dengan statemen ownproperti maka keseluruhan properti yg ada dalam 1 file akan terdetect 
@@ prototipe create new object @@
! apabila kita membuat object baru menggunakan prototipe maka semua properti constructor sebelumnya akan terhapus
@@ Understand the Prototype Chain @@
All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.
Because a prototype is an object, a prototype can have its own prototype! 
@@   @@
```