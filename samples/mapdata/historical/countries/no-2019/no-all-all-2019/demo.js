// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['no-tr-1943', 0],
    ['no-tr-1941', 1],
    ['no-ho-1244', 2],
    ['no-tr-1902', 3],
    ['no-nt-1755', 4],
    ['no-nt-1750', 5],
    ['no-mr-1576', 6],
    ['no-no-1837', 7],
    ['no-no-1834', 8],
    ['no-no-1835', 9],
    ['no-no-1838', 10],
    ['no-fi-2018', 11],
    ['no-fi-2014', 12],
    ['no-nt-1719', 13],
    ['no-st-1630', 14],
    ['no-sf-1439', 15],
    ['no-va-1004', 16],
    ['no-fi-2020', 17],
    ['no-st-1617', 18],
    ['no-ro-1142', 19],
    ['no-ro-1141', 20],
    ['no-ro-1145', 21],
    ['no-ho-1265', 22],
    ['no-mr-1546', 23],
    ['no-mr-1547', 24],
    ['no-mr-1545', 25],
    ['no-no-1828', 26],
    ['no-no-1820', 27],
    ['no-tr-1926', 28],
    ['no-no-1848', 29],
    ['no-no-1865', 30],
    ['no-no-1868', 31],
    ['no-mr-1515', 32],
    ['no-no-1815', 33],
    ['no-no-1816', 34],
    ['no-no-1813', 35],
    ['no-no-1818', 36],
    ['no-mr-1532', 37],
    ['no-mr-1531', 38],
    ['no-ro-1151', 39],
    ['no-sf-1411', 40],
    ['no-sf-1412', 41],
    ['no-of-111', 42],
    ['no-no-1856', 43],
    ['no-no-1857', 44],
    ['no-ho-1259', 45],
    ['no-tr-1936', 46],
    ['no-nt-1748', 47],
    ['no-vf-723', 48],
    ['no-no-1804', 49],
    ['no-vf-716', 50],
    ['no-no-1845', 51],
    ['no-he-432', 52],
    ['no-ho-1247', 53],
    ['no-no-1870', 54],
    ['no-tr-1917', 55],
    ['no-nt-1721', 56],
    ['no-no-1866', 57],
    ['no-sf-1413', 58],
    ['no-mr-1519', 59],
    ['no-mr-1520', 60],
    ['no-nt-1739', 61],
    ['no-nt-1714', 62],
    ['no-st-1663', 63],
    ['no-fi-2004', 64],
    ['no-vf-706', 65],
    ['no-ro-1144', 66],
    ['no-of-118', 67],
    ['no-of-101', 68],
    ['no-no-1849', 69],
    ['no-st-1621', 70],
    ['no-st-1627', 71],
    ['no-no-1836', 72],
    ['no-vf-701', 73],
    ['no-va-1037', 74],
    ['no-ho-1221', 75],
    ['no-vf-722', 76],
    ['no-sf-1428', 77],
    ['no-mr-1514', 78],
    ['no-no-1812', 79],
    ['no-te-819', 80],
    ['no-te-806', 81],
    ['no-ak-214', 82],
    ['no-ak-215', 83],
    ['no-of-138', 84],
    ['no-no-1850', 85],
    ['no-no-1854', 86],
    ['no-tr-1942', 87],
    ['no-tr-1940', 88],
    ['no-te-814', 89],
    ['no-te-815', 90],
    ['no-te-817', 91],
    ['no-ro-1149', 92],
    ['no-mr-1566', 93],
    ['no-ho-1251', 94],
    ['no-vf-711', 95],
    ['no-nt-1702', 96],
    ['no-nt-1724', 97],
    ['no-nt-1703', 98],
    ['no-aa-911', 99],
    ['no-aa-912', 100],
    ['no-ro-1129', 101],
    ['no-ro-1122', 102],
    ['no-ro-1120', 103],
    ['no-ro-1124', 104],
    ['no-ro-1127', 105],
    ['no-va-1018', 106],
    ['no-va-1017', 107],
    ['no-ho-1234', 108],
    ['no-ho-1231', 109],
    ['no-ho-1238', 110],
    ['no-ho-1232', 111],
    ['no-ho-1233', 112],
    ['no-ho-1235', 113],
    ['no-ho-1241', 114],
    ['no-of-104', 115],
    ['no-of-105', 116],
    ['no-aa-901', 117],
    ['no-aa-906', 118],
    ['no-aa-904', 119],
    ['no-no-1841', 120],
    ['no-no-1840', 121],
    ['no-ho-1243', 122],
    ['no-ho-1245', 123],
    ['no-ho-1246', 124],
    ['no-he-441', 125],
    ['no-he-437', 126],
    ['no-he-436', 127],
    ['no-he-434', 128],
    ['no-he-428', 129],
    ['no-mr-1539', 130],
    ['no-mr-1524', 131],
    ['no-mr-1526', 132],
    ['no-st-1622', 133],
    ['no-st-1624', 134],
    ['no-aa-919', 135],
    ['no-op-529', 136],
    ['no-ak-239', 137],
    ['no-ak-238', 138],
    ['no-ak-234', 139],
    ['no-ak-235', 140],
    ['no-he-420', 141],
    ['no-ak-236', 142],
    ['no-op-528', 143],
    ['no-ak-237', 144],
    ['no-he-426', 145],
    ['no-ak-233', 146],
    ['no-ak-231', 147],
    ['no-ak-230', 148],
    ['no-nt-1756', 149],
    ['no-nt-1751', 150],
    ['no-bu-625', 151],
    ['no-vf-714', 152],
    ['no-op-512', 153],
    ['no-va-1003', 154],
    ['no-op-514', 155],
    ['no-va-1001', 156],
    ['no-aa-928', 157],
    ['no-mr-1571', 158],
    ['no-ho-1227', 159],
    ['no-bu-620', 160],
    ['no-of-137', 161],
    ['no-of-136', 162],
    ['no-of-135', 163],
    ['no-bu-627', 164],
    ['no-ho-1222', 165],
    ['no-ho-1219', 166],
    ['no-no-1832', 167],
    ['no-no-1833', 168],
    ['no-no-1839', 169],
    ['no-fi-2019', 170],
    ['no-fi-2015', 171],
    ['no-fi-2017', 172],
    ['no-tr-2012', 173],
    ['no-te-830', 174],
    ['no-te-829', 175],
    ['no-te-826', 176],
    ['no-te-828', 177],
    ['no-te-807', 178],
    ['no-te-822', 179],
    ['no-vf-704', 180],
    ['no-vf-713', 181],
    ['no-vf-702', 182],
    ['no-bu-616', 183],
    ['no-bu-619', 184],
    ['no-nt-1711', 185],
    ['no-nt-1717', 186],
    ['no-st-1653', 187],
    ['no-st-1657', 188],
    ['no-ro-1133', 189],
    ['no-ro-1134', 190],
    ['no-ro-1130', 191],
    ['no-ro-1135', 192],
    ['no-st-1664', 193],
    ['no-st-1665', 194],
    ['no-st-1644', 195],
    ['no-st-1648', 196],
    ['no-sf-1432', 197],
    ['no-sf-1433', 198],
    ['no-sf-1430', 199],
    ['no-sf-1431', 200],
    ['no-op-519', 201],
    ['no-op-517', 202],
    ['no-bu-615', 203],
    ['no-op-540', 204],
    ['no-bu-622', 205],
    ['no-bu-623', 206],
    ['no-bu-621', 207],
    ['no-ho-1224', 208],
    ['no-ho-1228', 209],
    ['no-ho-1223', 210],
    ['no-bu-626', 211],
    ['no-bu-612', 212],
    ['no-bu-624', 213],
    ['no-bu-628', 214],
    ['no-no-1871', 215],
    ['no-mr-1502', 216],
    ['no-mr-1548', 217],
    ['no-mr-1504', 218],
    ['no-mr-1505', 219],
    ['no-fi-2027', 220],
    ['no-fi-2025', 221],
    ['no-aa-941', 222],
    ['no-st-1612', 223],
    ['no-mr-1567', 224],
    ['no-st-1613', 225],
    ['no-st-1638', 226],
    ['no-va-1046', 227],
    ['no-ro-1146', 228],
    ['no-ho-1263', 229],
    ['no-ho-1260', 230],
    ['no-ho-1266', 231],
    ['no-ho-1264', 232],
    ['no-mr-1543', 233],
    ['no-mr-1551', 234],
    ['no-op-522', 235],
    ['no-op-542', 236],
    ['no-bu-617', 237],
    ['no-op-543', 238],
    ['no-op-515', 239],
    ['no-op-544', 240],
    ['no-op-516', 241],
    ['no-op-545', 242],
    ['no-op-520', 243],
    ['no-of-122', 244],
    ['no-of-123', 245],
    ['no-of-124', 246],
    ['no-of-125', 247],
    ['no-of-127', 248],
    ['no-of-128', 249],
    ['no-no-1824', 250],
    ['no-no-1822', 251],
    ['no-va-1014', 252],
    ['no-he-429', 253],
    ['no-he-415', 254],
    ['no-he-417', 255],
    ['no-he-425', 256],
    ['no-op-521', 257],
    ['no-he-412', 258],
    ['no-he-418', 259],
    ['no-he-419', 260],
    ['no-aa-926', 261],
    ['no-no-1805', 262],
    ['no-tr-1920', 263],
    ['no-tr-1922', 264],
    ['no-tr-1923', 265],
    ['no-tr-1925', 266],
    ['no-tr-1927', 267],
    ['no-tr-1929', 268],
    ['no-te-833', 269],
    ['no-aa-940', 270],
    ['no-ho-1252', 271],
    ['no-st-1640', 272],
    ['no-nt-1718', 273],
    ['no-nt-1725', 274],
    ['no-nt-1749', 275],
    ['no-sf-1420', 276],
    ['no-sf-1422', 277],
    ['no-bu-618', 278],
    ['no-sf-1424', 279],
    ['no-sf-1426', 280],
    ['no-sf-1429', 281],
    ['no-va-1032', 282],
    ['no-he-403', 283],
    ['no-op-502', 284],
    ['no-va-1034', 285],
    ['no-bu-631', 286],
    ['no-bu-633', 287],
    ['no-ho-1216', 288],
    ['no-no-1860', 289],
    ['no-no-1867', 290],
    ['no-aa-937', 291],
    ['no-va-938', 292],
    ['no-aa-929', 293],
    ['no-aa-935', 294],
    ['no-ro-1106', 295],
    ['no-ro-1102', 296],
    ['no-ro-1121', 297],
    ['no-ro-1114', 298],
    ['no-ro-1103', 299],
    ['no-ro-1101', 300],
    ['no-mr-1517', 301],
    ['no-mr-1516', 302],
    ['no-mr-1511', 303],
    ['no-no-1825', 304],
    ['no-no-1811', 305],
    ['no-mr-1534', 306],
    ['no-mr-1535', 307],
    ['no-ho-1242', 308],
    ['no-he-439', 309],
    ['no-st-1601', 310],
    ['no-he-430', 311],
    ['no-te-805', 312],
    ['no-te-811', 313],
    ['no-ak-216', 314],
    ['no-ak-217', 315],
    ['no-ak-213', 316],
    ['no-ak-229', 317],
    ['no-ak-211', 318],
    ['no-os-219', 319],
    ['no-sf-1444', 320],
    ['no-mr-1554', 321],
    ['no-mr-1557', 322],
    ['no-sf-1418', 323],
    ['no-sf-1419', 324],
    ['no-op-534', 325],
    ['no-op-533', 326],
    ['no-sf-1416', 327],
    ['no-sf-1417', 328],
    ['no-sf-1421', 329],
    ['no-of-121', 330],
    ['no-of-119', 331],
    ['no-no-1859', 332],
    ['no-op-536', 333],
    ['no-bu-605', 334],
    ['no-no-1851', 335],
    ['no-no-1852', 336],
    ['no-tr-1903', 337],
    ['no-tr-1913', 338],
    ['no-no-1853', 339],
    ['no-op-513', 340],
    ['no-mr-1525', 341],
    ['no-sf-1449', 342],
    ['no-ho-1253', 343],
    ['no-mr-1523', 344],
    ['no-aa-914', 345],
    ['no-he-423', 346],
    ['no-mr-1528', 347],
    ['no-mr-1529', 348],
    ['no-os-301', 349],
    ['no-tr-1931', 350],
    ['no-tr-1924', 351],
    ['no-tr-1939', 352],
    ['no-tr-1938', 353],
    ['no-op-538', 354],
    ['no-op-501', 355],
    ['no-nt-1742', 356],
    ['no-nt-1738', 357],
    ['no-st-1632', 358],
    ['no-st-1634', 359],
    ['no-st-1636', 360],
    ['no-ak-228', 361],
    ['no-ak-227', 362],
    ['no-ak-226', 363],
    ['no-ak-221', 364],
    ['no-os-220', 365],
    ['no-va-1027', 366],
    ['no-va-1026', 367],
    ['no-va-1021', 368],
    ['no-va-1002', 369],
    ['no-va-1029', 370],
    ['no-vf-720', 371],
    ['no-nt-1744', 372],
    ['no-nt-1743', 373],
    ['no-vf-728', 374],
    ['no-vf-719', 375],
    ['no-bu-604', 376],
    ['no-ro-1160', 377],
    ['no-bu-602', 378],
    ['no-ho-1201', 379],
    ['no-ho-1211', 380],
    ['no-ro-1111', 381],
    ['no-sf-1445', 382],
    ['no-sf-1401', 383],
    ['no-sf-1438', 384],
    ['no-ro-1112', 385],
    ['no-sf-1443', 386],
    ['no-ro-1119', 387],
    ['no-mr-1563', 388],
    ['no-st-1635', 389],
    ['no-tr-1919', 390],
    ['no-of-106', 391],
    ['no-vf-709', 392],
    ['no-no-1874', 393],
    ['no-tr-1911', 394],
    ['no-fi-2021', 395],
    ['no-mr-1560', 396],
    ['no-tr-1933', 397],
    ['no-st-1633', 398],
    ['no-te-827', 399],
    ['no-te-821', 400],
    ['no-st-1662', 401],
    ['no-sf-1441', 402],
    ['no-op-511', 403],
    ['no-op-541', 404],
    ['no-no-1826', 405],
    ['no-te-831', 406],
    ['no-te-834', 407],
    ['no-bu-632', 408],
    ['no-he-402', 409],
    ['no-op-532', 410],
    ['no-he-427', 411],
    ['no-nt-1736', 412],
    ['no-nt-1740', 413],
    ['no-st-1620', 414],
    ['no-no-1827', 415],
    ['no-fi-2030', 416],
    ['no-fi-2002', 417],
    ['no-fi-2022', 418],
    ['no-tr-1928', 419],
    ['no-mr-1573', 420],
    ['no-fi-2011', 421],
    ['no-fi-2024', 422],
    ['no-fi-2023', 423],
    ['no-fi-2028', 424],
    ['no-fi-2003', 425],
    ['no-he-438', 426],
    ['undefined', 427]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'historical/countries/no-2019/no-all-all-2019'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/historical/countries/no-2019/no-all-all-2019.js">Norway, admin2 (2019)</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
