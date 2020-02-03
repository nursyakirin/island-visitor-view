import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  date: string;
  total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Pulau Manukan', date: '6 March', total: 4690},
  {position: 2, name: 'Pulau Tiuman', date: '6 March', total: 4454},
  {position: 3, name: 'Pulau Sapi', date: '4 March', total: 4070},
  {position: 4, name: 'Pulau Redang', date: '3 March', total: 3687},
  {position: 5, name: 'Pulau Dayang', date: '1 March', total: 3156},
  {position: 6, name: 'Pulau Redang', date: '7 March', total: 2880},
  {position: 7, name: 'Pulau Mabul', date: '7 March', total: 2793},
  {position: 8, name: 'Pulau Manukan', date: '7 March', total: 2785},
  {position: 9, name: 'Pulau Sapi', date: '6 March', total: 2758},
  {position: 10, name: 'Pulau Sipadan', date: '7 March', total: 2710},
  {position: 11, name: 'Pulau Sapi', date: '7 March', total: 2677},
  {position: 12, name: 'Pulau Kapas', date: '7 March', total: 2645},
  {position: 13, name: 'Pulau Redang', date: '5 March', total: 2390},
  {position: 14, name: 'Pulau Tioman', date: '7 March', total: 2386},
  {position: 15, name: 'Pulau Kapas', date: '4 March', total: 2374},
  {position: 16, name: 'Pulau Cenang', date: '5 March', total: 2295},
  {position: 17, name: 'Pulau Cenang', date: '6 March', total: 2282},
  {position: 18, name: 'Pulau Sipadan', date: '5 March', total: 2263},
  {position: 19, name: 'Pulau Mabul', date: '6 March', total: 2223},
  {position: 20, name: 'Pulau Cenang', date: '3 March', total: 2164},
  {position: 21, name: 'Pulau Kapas', date: '3 March', total: 2108},
  {position: 22, name: 'Pulau Sipadan', date: '4 March', total: 2103},
  {position: 23, name: 'Pulau Tioman', date: '5 March', total: 2090},
  {position: 24, name: 'Pulau Cenang', date: '7 March', total: 2046},
  {position: 25, name: 'Pulau Dayang', date: '4 March', total: 2030},
  {position: 26, name: 'Pulau Sipadan', date: '3 March', total: 2011},
  {position: 27, name: 'Pulau Cenang', date: '4 March', total: 1986},
  {position: 28, name: 'Sinar Harian', date: '2 March', total: 1972},
  {position: 29, name: 'Sinar Harian', date: '3 March', total: 1960},
  {position: 30, name: 'Pulau Dayang', date: '2 March', total: 1928},
  {position: 31, name: 'Pulau Mabul', date: '4 March', total: 1927},
  {position: 32, name: 'Pulau Mabul', date: '2 March', total: 1920},
  {position: 33, name: 'Sinar Harian', date: '6 March', total: 1909},
  {position: 34, name: 'Pulau Manukan', date: '1 March', total: 1903},
  {position: 35, name: 'Pulau Sipadan', date: '6 March', total: 1896},
  {position: 36, name: 'Pulau Dayang', date: '5 March', total: 1834},
  {position: 37, name: 'Pulau Dayang', date: '7 March', total: 1827},
  {position: 38, name: 'Pulau Manukan', date: '2 March', total: 1764},
  {position: 39, name: 'Pulau Manukan', date: '4 March', total: 1734},
  {position: 40, name: 'Pulau Kapas', date: '6 March', total: 1707},
  {position: 41, name: 'Pulau Sipadan', date: '1 March', total: 1706},
  {position: 42, name: 'Pulau Kapas', date: '1 March', total: 1689},
  {position: 43, name: 'Pulau Redang', date: '4 March', total: 1684},
  {position: 44, name: 'Pulau Tioman', date: '1 March', total: 1664},
  {position: 45, name: 'Pulau Tioman', date: '2 March', total: 1645},
  {position: 46, name: 'Pulau Tioman', date: '4 March', total: 1634},
  {position: 47, name: 'Pulau Manukan', date: '5 March', total: 1630},
  {position: 48, name: 'Sinar Harian', date: '5 March', total: 1564},
  {position: 49, name: 'Pulau Cenang', date: '1 March', total: 1541},
  {position: 50, name: 'Pulau Kapas', date: '2 March', total: 1447},
  {position: 51, name: 'Pulau Sapi', date: '3 March', total: 1400},
  {position: 52, name: 'Pulau Sapi', date: '1 March', total: 1347},
  {position: 53, name: 'Pulau Tioman', date: '3 March', total: 1324},
  {position: 54, name: 'Sinar Harian', date: '7 March', total: 1302},
  {position: 55, name: 'Pulau Dayang', date: '6 March', total: 1254},
  {position: 56, name: 'Pulau Redang', date: '6 March', total: 1238},
  {position: 57, name: 'Pulau Sipadan', date: '2 March', total: 1225},
  {position: 58, name: 'Pulau Redang', date: '1 March', total: 1149},
  {position: 59, name: 'Pulau Mabul', date: '5 March', total: 1119},
  {position: 60, name: 'Sinar Harian', date: '4 March', total: 1063},
  {position: 61, name: 'Pulau Manukan', date: '3 March', total: 1031},
  {position: 62, name: 'Pulau Dayang', date: '3 March', total: 1015},
  {position: 63, name: 'Pulau Mabul', date: '3 March', total: 959},
  {position: 64, name: 'Pulau Sapi', date: '2 March', total: 943},
  {position: 65, name: 'Pulau Cenang', date: '2 March', total: 911},
  {position: 66, name: 'Sinar Harian', date: '1 March', total: 823},
  {position: 67, name: 'Pulau Sapi', date: '5 March', total: 740},
  {position: 68, name: 'Pulau Redang', date: '2 March', total: 575},
  {position: 69, name: 'Pulau Mabul', date: '1 March', total: 500},
  {position: 70, name: 'Pulau Kapas', date: '5 March', total: 1167},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'island-visitor';
  displayedColumns: string[] = ['position', 'name', 'date', 'total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  logData(row) {
    console.log(row);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
