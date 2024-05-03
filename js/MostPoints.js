//may use this for my other mode 
const csvData = `Rank,Player,Points
1,LeBron James,39531
2,Kareem Abdul-Jabbar*,38387
3,Karl Malone*,36928
4,Kobe Bryant*,33643
5,Michael Jordan*,32292
6,Dirk Nowitzki*,31560
7,Wilt Chamberlain*,31419
8,Julius Erving*,30026
9,Moses Malone*,29580
10,Shaquille O'Neal*,28596
11,Carmelo Anthony,28289
12,Kevin Durant,27781
13,Dan Issel*,27482
14,Elvin Hayes*,27313
15,Hakeem Olajuwon*,26946
16,Oscar Robertson*,26710
17,Dominique Wilkins*,26668
18,George Gervin*,26595
19,Tim Duncan*,26496
20,Paul Pierce*,26397
21,John Havlicek*,26395
22,Kevin Garnett*,26071
23,Vince Carter,25728
24,Alex English*,25613
25,Rick Barry*,25279
26,Reggie Miller*,25279
27,James Harden,25231
28,Jerry West*,25192
29,Artis Gilmore*,24941
30,Russell Westbrook,24851
31,Patrick Ewing*,24815
32,Ray Allen*,24505
33,Allen Iverson*,24368
34,Charles Barkley*,23757
35,Robert Parish*,23334
36,Adrian Dantley*,23177
37,Dwyane Wade*,23165
38,Elgin Baylor*,23149
39,Stephen Curry,22632
40,DeMar DeRozan,22480
41,Clyde Drexler*,22195
42,Chris Paul,22041
43,Gary Payton*,21813
44,Larry Bird*,21791
45,Hal Greer*,21586
46,Walt Bellamy*,20941
47,Pau Gasol*,20894
48,Bob Pettit*,20880
49,David Robinson*,20790
50,LaMarcus Aldridge,20558
51,Mitch Richmond*,20497
52,Joe Johnson,20407
53,Damian Lillard,20231
54,Tom Chambers,20049
55,Antawn Jamison,20042
56,John Stockton*,19711
57,Bernard King*,19655
58,Clifford Robinson,19591
59,Walter Davis,19521
60,Dwight Howard,19485
61,Tony Parker*,19473
62,Terry Cummings,19460
63,Jamal Crawford,19419
64,Bob Lanier*,19248
65,Eddie Johnson,19202
66,Gail Goodrich*,19181
67,Reggie Theus,19015
68,Dale Ellis,19004
69,Scottie Pippen*,18940
70,Jason Terry,18881
71,Chet Walker*,18831
72,Isiah Thomas*,18822
73,Bob McAdoo*,18787
74,Zach Randolph,18578
75,Mark Aguirre,18458
76,Dolph Schayes*,18438
77,Tracy McGrady*,18381
78,Glen Rice,18336
79,Dave Bing*,18327
80,World B. Free,17955
81,Calvin Murphy*,17949
82,Lou Hudson*,17940
83,Chris Mullin*,17911
84,Lenny Wilkens*,17772
85,Bailey Howell*,17770
86,Magic Johnson*,17707
87,Shawn Marion,17700
88,Rudy Gay,17642
89,Rolando Blackman,17623
90,Otis Thorpe,17600
91,Jason Kidd*,17529
92,Earl Monroe*,17454
93,Ron Boone,17437
94,Giannis Antetokounmpo,17412
95,Steve Nash*,17387
96,Kevin McHale*,17335
97,Michael Finley,17306
98,Jack Sikma*,17287
99,Kevin Willis,17253
100,Jeff Malone,17231
101,Chris Bosh*,17189
102,Chris Webber*,17182
103,Paul George,17151
104,Grant Hill*,17137
105,Spencer Haywood*,17111
106,George McGinnis*,17009
107,Bob Cousy*,16960
108,Elton Brand,16827
109,Buck Williams,16784
110,Anthony Davis,16765
111,Latrell Sprewell,16712
112,Tiny Archibald*,16481
113,Jerry Stackhouse,16409
114,Joe Dumars*,16401
115,James Worthy*,16320
116,Billy Cunningham*,16310
117,Stephon Marbury,16297
118,Andre Miller,16278
119,Paul Arizin*,16266
120,Randy Smith,16262
121,Kyrie Irving,16238
122,Juwan Howard,16159
123,Kyle Lowry,16024
124,Derek Harper,16006
125,Rasheed Wallace,16006
126,Amar'e Stoudemire,15994
127,Kiki Vandeweghe,15980
128,Brook Lopez,15954
129,Pete Maravich*,15948
130,Jack Twyman*,15840
131,Chauncey Billups,15802
132,Detlef Schrempf,15761
133,Richard Hamilton,15708
134,Larry Nance,15687
135,Jeff Hornacek,15659
136,Antoine Walker,15647
137,Sam Cassell,15635
138,Bradley Beal,15604
139,Lou Williams,15593
140,Terry Porter,15586
141,Walt Frazier*,15581
142,Rashard Lewis,15579
143,Dennis Johnson*,15535
144,Bob Dandridge*,15530
145,Mike Conley,15422
146,Sam Jones*,15411
147,Tim Hardaway*,15373
148,Dick Barnett,15358
149,Shawn Kemp,15347
150,Sam Perkins,15324
151,Jrue Holiday,15307
152,John Drew,15291
153,Louie Dampier*,15279
154,Zelmo Beaty*,15207
155,Kevin Love,15111
156,Byron Scott,15097
157,Dick Van Arsdale,15079
158,Shareef Abdur-Rahim,15028
159,Mike Mitchell,15016
160,Richard Jefferson,14904
161,Cliff Hagan*,14870
162,James Edwards,14862
163,Monta Ellis,14858
164,Maurice Lucas,14857
165,Charlie Scott*,14837
166,Klay Thompson,14757
167,Mike Bibby,14698
168,Richie Guerin*,14676
169,Jason Richardson,14644
170,Jamaal Wilkes*,14644
171,Purvis Short,14607
172,Allan Houston,14551
173,Nikola Vučević,14549
174,Paul Millsap,14536
175,Bill Russell*,14522
176,Blake Griffin,14513
177,Kemba Walker,14486
178,Hersey Hawkins,14470
179,Ricky Pierce,14467
180,Rod Strickland,14463
181,Nate Thurmond*,14437
182,Jo Jo White*,14399
183,Al Jefferson,14343
184,Alonzo Mourning*,14311
185,Glenn Robinson,14234
186,Tom Van Arsdale,14232
187,Jimmy Butler,14191
188,Eddie Jones,14155
189,Thaddeus Young,14114
190,Gus Williams,14093
191,Dave DeBusschere*,14053
192,Jerry Lucas*,14053
193,Manu Ginóbili*,14043
194,David West,14034
195,Fred Brown,14018
196,Carlos Boozer,13976
197,Tobias Harris,13974
198,Andre Iguodala,13968
199,Jeff Green,13958
200,Alvan Adams,13910
,Ron Harper,13910
202,Billy Knight,13901
203,Bob Love,13895
204,Marques Johnson,13892
205,Chuck Person,13858
206,Al Horford,13836
207,Deron Williams,13804
208,Bill Laimbeer,13790
209,Peja Stojaković,13647
210,Orlando Woolridge,13623
211,Xavier McDaniel,13606
212,Eric Gordon,13538
213,Dave Cowens*,13516
214,Baron Davis,13447
215,Steve Smith,13430
216,David Thompson*,13422
217,Devin Booker,13420
218,Vlade Divac*,13398
219,CJ McCollum,13388
220,Rudy Tomjanovich*,13383
221,Luol Deng,13361
222,Jermaine O'Neal,13309
223,Al Harrington,13237
224,Jalen Rose,13220
225,Corey Maggette,13198
226,Kevin Johnson,13127
227,Billy Paultz,13099
228,Kawhi Leonard,13087
229,Metta World Peace,13058
230,Jeff Mullins,13017
231,Horace Grant,12996
232,Nikola Jokić,12996
233,Josh Smith,12996
234,Stephen Jackson,12976
235,Bob Boozer,12964
236,Larry Kenon,12954
237,Kendall Gill,12914
238,Derrick Coleman,12884
239,Wayman Tisdale,12878
240,Rik Smits,12871
241,Mychal Thompson,12810
242,Paul Westphal*,12809
243,Sidney Wicks,12803
244,DeMarcus Cousins,12802
245,Lamar Odom,12781
246,Mickey Johnson,12748
247,Johnny Newman,12740
248,Bill Cartwright,12713
249,Armen Gilliam,12700
250,Jim Jackson,12690`;


