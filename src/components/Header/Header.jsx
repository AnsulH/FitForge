import React from 'react'
import{Link , NavLink } from 'react-router-dom'
import '/src/css/Men.css'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="head bg-slate-500 text-white border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/Men" className="flex items-center">
                        <svg className='logo' preserveAspectRatio="xMidYMid meet" viewBox="0 0 900 1500" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" >
                            <g><path fill="currentColor" d="M 379.5,-0.5 C 381.167,-0.5 382.833,-0.5 384.5,-0.5C 394.408,5.38832 403.574,12.3883 412,20.5C 416.915,27.328 421.581,34.328 426,41.5C 431.929,46.8843 437.762,52.3843 443.5,58C 444.5,58.6667 445.5,58.6667 446.5,58C 450.263,52.9905 454.763,51.8239 460,54.5C 460.082,59.5055 460.082,64.5055 460,69.5C 472.906,81.7462 483.572,95.7462 492,111.5C 508.924,130.086 523.924,150.086 537,171.5C 548.152,192.802 558.485,214.469 568,236.5C 569.019,245.301 570.685,253.967 573,262.5C 573.818,268.902 573.484,275.235 572,281.5C 568.667,290.167 565.333,298.833 562,307.5C 553.666,336.168 544.333,364.501 534,392.5C 529.67,401.836 524.336,410.502 518,418.5C 508.333,428.833 498.667,439.167 489,449.5C 487.839,468.505 486.506,487.505 485,506.5C 480.648,523.207 472.648,537.874 461,550.5C 456.83,583.838 447.33,615.504 432.5,645.5C 435.058,658.71 435.891,672.043 435,685.5C 433.427,694.557 430.093,702.89 425,710.5C 422.641,719.933 423.641,728.933 428,737.5C 431.413,749.299 432.246,761.299 430.5,773.5C 430.469,778.235 430.969,782.901 432,787.5C 437,799.833 442,812.167 447,824.5C 458.135,844.442 466.801,865.442 473,887.5C 483.001,920.837 489.667,954.837 493,989.5C 495.257,1028.19 497.924,1066.86 501,1105.5C 502.136,1109.24 503.47,1112.91 505,1116.5C 515.582,1133.66 524.582,1151.66 532,1170.5C 535.691,1182.55 537.524,1194.88 537.5,1207.5C 535.189,1254.48 534.023,1301.48 534,1348.5C 538.396,1358.42 541.396,1368.75 543,1379.5C 553.361,1398.09 566.861,1413.92 583.5,1427C 586.382,1428.61 589.382,1429.94 592.5,1431C 595.465,1433.79 597.798,1436.96 599.5,1440.5C 599.5,1442.17 599.5,1443.83 599.5,1445.5C 597.704,1446.79 596.037,1448.29 594.5,1450C 589.899,1450.15 585.566,1450.98 581.5,1452.5C 580.167,1452.5 578.833,1452.5 577.5,1452.5C 573.186,1449.99 568.852,1449.99 564.5,1452.5C 559.5,1452.5 554.5,1452.5 549.5,1452.5C 543.747,1450.93 537.747,1450.1 531.5,1450C 528.833,1445 526.167,1440 523.5,1435C 515.118,1434.12 506.784,1432.79 498.5,1431C 495.266,1429.06 493.1,1426.22 492,1422.5C 491.19,1411.71 492.023,1401.05 494.5,1390.5C 492.67,1376.54 491.17,1362.54 490,1348.5C 485.717,1325.32 478.05,1303.32 467,1282.5C 458.079,1266.33 449.412,1249.99 441,1233.5C 435.141,1218.73 431.808,1203.4 431,1187.5C 430.275,1169.12 430.608,1150.78 432,1132.5C 417.781,1110.06 406.781,1086.06 399,1060.5C 389.008,1041.17 378.008,1022.51 366,1004.5C 352.58,977.904 340.913,950.571 331,922.5C 328.232,938.14 324.232,953.474 319,968.5C 316.704,981.906 314.037,995.24 311,1008.5C 301.19,1035.07 294.524,1062.41 291,1090.5C 289.824,1099.14 289.49,1107.81 290,1116.5C 303.103,1146.04 316.77,1175.38 331,1204.5C 335.62,1214.36 338.62,1224.69 340,1235.5C 340.463,1249.5 340.296,1263.5 339.5,1277.5C 339.49,1284.87 339.99,1292.21 341,1299.5C 347.02,1325.58 353.353,1351.58 360,1377.5C 363.678,1390.87 368.345,1403.87 374,1416.5C 378.003,1431 372.837,1440.17 358.5,1444C 349.833,1444.67 341.167,1444.67 332.5,1444C 315.41,1440.34 298.41,1440.67 281.5,1445C 264.631,1445.19 247.798,1446.02 231,1447.5C 223.722,1446.89 216.555,1445.72 209.5,1444C 207.604,1442.19 207.104,1440.03 208,1437.5C 210.51,1435.37 212.676,1432.87 214.5,1430C 224.264,1426.15 234.264,1423.15 244.5,1421C 259.5,1410 274.5,1399 289.5,1388C 292.731,1384.8 295.065,1381.13 296.5,1377C 294.578,1360.9 290.411,1345.4 284,1330.5C 271.17,1297.5 256.17,1265.5 239,1234.5C 236.388,1228.28 234.055,1221.94 232,1215.5C 226.618,1194.26 221.618,1172.93 217,1151.5C 210.149,1134.13 204.149,1116.46 199,1098.5C 198.593,1095.32 198.093,1092.15 197.5,1089C 200.151,1071.37 196.985,1054.87 188,1039.5C 180.472,1020.2 176.139,1000.2 175,979.5C 173.174,950.618 174.841,921.951 180,893.5C 184.539,871.139 189.206,848.806 194,826.5C 202.358,796.105 210.691,765.772 219,735.5C 220.088,720.825 220.755,706.158 221,691.5C 222.195,684.386 223.862,677.386 226,670.5C 230.408,657.945 234.408,645.278 238,632.5C 239.406,626.558 239.739,620.558 239,614.5C 230.861,595.75 222.527,577.083 214,558.5C 207.601,551.368 201.935,543.701 197,535.5C 193.172,528.345 190.338,520.845 188.5,513C 185.132,511.449 181.632,510.283 178,509.5C 159.296,514.76 140.296,518.427 121,520.5C 104.793,519.542 89.2926,515.709 74.5,509C 56.977,498.826 38.977,489.493 20.5,481C 12.1103,473.796 5.11032,465.629 -0.5,456.5C -0.5,452.833 -0.5,449.167 -0.5,445.5C 1.47406,443.572 2.97406,441.239 4,438.5C 4.58037,431.35 5.9137,424.35 8,417.5C 15.4133,403.672 23.08,390.005 31,376.5C 34.799,371.699 38.9657,367.199 43.5,363C 53.6068,355.527 63.4401,347.694 73,339.5C 84.569,324.207 96.7357,309.374 109.5,295C 114.651,292.924 119.651,290.59 124.5,288C 138.826,284.083 153.159,281.25 167.5,279.5C 172.706,282.385 178.372,284.218 184.5,285C 185.931,285.465 187.097,286.299 188,287.5C 193.501,297.506 196.168,308.172 196,319.5C 192.103,328.107 185.603,332.607 176.5,333C 174.513,331.681 173.346,329.848 173,327.5C 172.097,328.701 170.931,329.535 169.5,330C 165.716,330.407 162.049,331.241 158.5,332.5C 155.31,331.358 152.143,331.358 149,332.5C 141.264,328.231 133.93,328.898 127,334.5C 117.988,347.849 109.988,361.849 103,376.5C 101.771,386.441 101.104,396.441 101,406.5C 98.2479,411.178 96.9146,416.178 97,421.5C 116.059,407.072 135.725,406.072 156,418.5C 177.593,403.65 200.76,400.484 225.5,409C 235.31,413.07 244.643,417.904 253.5,423.5C 262.864,419.402 271.697,414.402 280,408.5C 280.332,403.146 279.999,397.813 279,392.5C 273.594,391.13 268.927,388.464 265,384.5C 263.844,380.877 262.844,377.211 262,373.5C 261.667,376.833 261.333,380.167 261,383.5C 257.361,373.415 256.361,363.081 258,352.5C 254.912,339.66 251.246,326.993 247,314.5C 246.016,308.295 246.683,302.295 249,296.5C 249.694,282.306 251.694,268.306 255,254.5C 261.593,242.232 270.093,231.399 280.5,222C 286.921,218.728 293.588,216.061 300.5,214C 304.54,210.656 308.54,207.323 312.5,204C 319.118,202.622 325.785,202.289 332.5,203C 335.432,206.605 338.932,209.439 343,211.5C 357.665,203.276 367.998,206.943 374,222.5C 377.723,232.84 379.723,243.507 380,254.5C 385.599,260.695 389.933,267.695 393,275.5C 392.727,288.528 392.06,301.528 391,314.5C 392.224,319.789 395.058,323.955 399.5,327C 395.207,328.202 391.707,327.035 389,323.5C 388.969,327.804 387.969,331.804 386,335.5C 385.667,332.833 385.333,330.167 385,327.5C 382.111,333.101 380.945,339.101 381.5,345.5C 382.673,355.504 383.507,365.504 384,375.5C 383.106,378.392 381.44,380.726 379,382.5C 380.532,379.061 381.199,375.394 381,371.5C 379.25,375.641 377.584,379.641 376,383.5C 380.653,386.088 385.487,387.921 390.5,389C 394.633,385.869 398.466,382.369 402,378.5C 408.127,370.705 414.627,363.205 421.5,356C 427.642,351.205 434.309,347.205 441.5,344C 448.959,331.578 456.793,319.412 465,307.5C 475.494,297.328 486.827,288.328 499,280.5C 502.147,272.772 503.48,264.772 503,256.5C 499.44,248.379 495.107,240.712 490,233.5C 483.025,209.6 476.358,185.6 470,161.5C 463.933,144.698 456.766,128.364 448.5,112.5C 440.838,109.443 433.171,106.276 425.5,103C 421.395,99.8064 417.728,96.1397 414.5,92C 411.461,91.6466 408.795,90.4799 406.5,88.5C 396.143,94.0089 386.477,100.509 377.5,108C 371.065,111.214 368.232,109.381 369,102.5C 379.93,93.1825 390.097,83.0158 399.5,72C 397.232,69.0322 394.232,67.3655 390.5,67C 377.218,65.3398 363.884,64.3398 350.5,64C 343.747,63.6215 341.581,60.4548 344,54.5C 345.062,53.9032 346.228,53.5698 347.5,53.5C 353.646,54.1016 359.813,54.435 366,54.5C 377.51,53.9131 389.01,53.2464 400.5,52.5C 399.78,47.7229 397.947,43.3896 395,39.5C 386.333,31.5 377.667,23.5 369,15.5C 367.342,12.6913 366.175,9.69126 365.5,6.5C 365.539,4.41277 366.539,3.07943 368.5,2.5C 372.441,4.59792 376.275,6.93125 380,9.5C 379.951,7.32501 379.451,5.15835 378.5,3C 378.989,1.86151 379.322,0.69484 379.5,-0.5 Z" /></g>
                        </svg>

                    </Link><div className='cen'>FIT FORGE</div> 
                    <div className="justify-between items-center ">
                        
                    </div>
                </div>
            </nav>
        </header>
    );
}

