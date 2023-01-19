var username = ["Trần Lê Phương Anh","Nguyễn Thị Thùy Duyên","Lê Hoàng Ngọc Hà","Nguyễn Nam Hải","Trương Văn Hào","Huỳnh Thị Bảo Hân","Nguyễn Ngọc Gia Hân","Nguyễn Thị Thu Hoàng","Trần Quang Huy","Trần Đặng Kim Huyền","Trương Hồng Bảo Khanh","Trương Hồng Bảo Khánh","Nguyễn Hữu Minh Khoa","Nguyễn Văn Khoa","Phan Thị Khánh Ly","Nguyễn Ngọc Mai","Phan Nguyễn Hà My","Nguyễn Trần Khánh Ngân","Phan Ngọc Tuyết Ngân","Võ Thị Khánh Ngọc","Hứa Đình Khôi Nguyên","Nguyễn Thị Thảo Nguyên","Đỗ Nguyễn Trọng Nhân","Hồ Yến Nhi","Phùng Hoàng Bảo Như","Phan Kiều Oanh","Đặng Nguyễn Ngọc Phương","Trần Quang","Vương Trần Minh Quân","Trần Lê Uyên Thảo","Nguyễn Đức Thịnh","Trần Thị Thanh Thúy","Mai Nguyễn Anh Thư","Nguyễn Chí Tín","Hồ Lê Bảo Trân","Nguyễn Trần Anh Tuấn","Trần Thị Kiều Vy","Phan Chu Anh Quân","Thái Tấn Anh Khoa"]
var matkhau =["16082008","07112008","02022008","26122008","18082008","25062008","02072008","14122008","17072008","12122008","27052008","27052008","10062008","15012008","13052008","31072008","17052008","23012008","31122008","07082008","16112008","26092008","30112008","17032008","14082008","23082008","26112008","14072008","26122008","31012008","06112008","19092008","03012008","16012008","01092008","28032008","18042008","29072008","11012008"]
var anhdaidien = ["https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/322659054_478123364490797_8945630190459087416_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=UCwZsUMEH9EAX9gDrAm&_nc_ht=scontent.fdad2-1.fna&oh=03_AdQ4ZCMjEHKQtpWH1bqs6baLaDYRFpSgvKVF0Yuw4OG5Uw&oe=63F0A7B8","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=d9j89UgvyTgAX_J8Aqv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-1.fna&oh=00_AfAENc2x1UlPKB4w8ZRu2_B-m3rxnGeKRtIdP7BN9m3WEg&oe=63EF24F8","https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/295235291_709311320790482_163081331067604700_n.jpg?_nc_cat=106x&ccb=1-7&_nc_sid=174925&_nc_ohc=8rENHN4NPhcAX-MYvJp&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAKibr2Gf_4nGoGA1qx41W7Z-HHJztWU6sBGNGERy33mg&oe=63CD1995","https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/322659054_478123364490797_8945630190459087416_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=UCwZsUMEH9EAX9gDrAm&_nc_ht=scontent.fdad2-1.fna&oh=03_AdQ4ZCMjEHKQtpWH1bqs6baLaDYRFpSgvKVF0Yuw4OG5Uw&oe=63F0A7B8","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=d9j89UgvyTgAX_J8Aqv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-1.fna&oh=00_AfAENc2x1UlPKB4w8ZRu2_B-m3rxnGeKRtIdP7BN9m3WEg&oe=63EF24F8","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=d9j89UgvyTgAX_J8Aqv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-1.fna&oh=00_AfAENc2x1UlPKB4w8ZRu2_B-m3rxnGeKRtIdP7BN9m3WEg&oe=63EF24F8","https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-1/324875074_724259159321537_9182769444897984200_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=55F7XbLGw9IAX9iN-jE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAzlecuko8SaNuHtbBzvBZVbP0SIDyEFgMQ1ww0quxnug&oe=63CC6EDD","https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-1/322163692_686478616487178_6341618006748710142_n.jpg?stp=c166.133.261.261a_dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=MngucNygj9kAX-XrvmK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-2.fna&oh=00_AfCPExg4s0jkHWunYVSLm6jhSCysTLcP1aqXRF2PGxk7Tg&oe=63CCC898","https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-1/292400244_179518207863065_153121091165247418_n.jpg?stp=dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=LpoZ2I_ySlIAX_0-nlx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-4.fna&oh=00_AfAgeGRWBG26W0T-dlslMbRAlNMkK7bnXNU4Qx5C5Oj17Q&oe=63CD9BDC","https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-1/324670015_482942883984362_2198674976309019496_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RBa1vxSV_S8AX91JiTI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBMU8yw38pHTj1Q5VmQEhs8VHxEoG44hoviee4SY_V2Fw&oe=63CD89F8 ","https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/277169783_4694953173950317_2908116022094018975_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=O6Mp_knlRaMAX_rwo8S&_nc_ht=scontent.fdad1-4.fna&oh=00_AfCIvkyl7w88SPudrTY3_vh2BxgqQMcerTsywII0nvT3ig&oe=63CD661D","https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/277169783_4694953173950317_2908116022094018975_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=O6Mp_knlRaMAX_rwo8S&_nc_ht=scontent.fdad1-4.fna&oh=00_AfCIvkyl7w88SPudrTY3_vh2BxgqQMcerTsywII0nvT3ig&oe=63CD661D","https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-1/322216643_870106641073650_2147529949760042926_n.jpg?stp=dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Kr58Ba8P9sMAX_TbbMm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-4.fna&oh=00_AfBpjrqj7mQMX76f-dKTBLtWdF9MkPjxQX87gF3T7JHfuQ&oe=63CD6CCC","https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/308635150_423878429877624_56532394551161985_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HxoPAaKWsgkAX8Rd73_&_nc_ht=scontent.fdad2-1.fna&oh=00_AfB200GpaXcvQbEb8I2Yl3Q6iqijpc9eStIPNuz2v5c9cA&oe=63CC996C ","https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-1/323417228_1572371589874485_4087766730118141967_n.jpg?stp=dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Lhbsi3FWl0AAX-ntg5y&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBgPvMpjlb_GRIcPgbiGD2KyLOUy4PiFwIkDoLG1XWpFA&oe=63CC2CFB","https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-1/326213029_1561979290957219_1429490355590653302_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=I5OgOLAe7-IAX9S37y9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad2-1.fna&oh=00_AfCe9jWAh4juNqM97FAPI-AVbLsc9GOWRVuhHh4S8Ax_mQ&oe=63CE06F9","https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-1/311275711_798051834854263_3442061987484517012_n.jpg?stp=c147.538.769.770a_dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=iKs4fCKBl3YAX9E75C7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-4.fna&oh=00_AfBrmZm4O5Ht9cS065bvwQnVfEF8VASBw8gbZNYn8qlbIQ&oe=63CCADE8  ","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=d9j89UgvyTgAX_J8Aqv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-1.fna&oh=00_AfAENc2x1UlPKB4w8ZRu2_B-m3rxnGeKRtIdP7BN9m3WEg&oe=63EF24F8","https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/257204240_104536578719645_8185311806814007048_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wvf2Qaas0N8AX9uRYTz&_nc_ht=scontent.fdad1-2.fna&oh=00_AfDHtaWFvY8Tn_nwAbeRzXkeZlljfvAPMP0ss55Xd4Tp5A&oe=63CC4AC3","https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/324855310_1189907111627665_7149095591623724719_n.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=bja--ua9Kp8AX-vztPX&_nc_oc=AQkLZJgbojG-9cx0fZJCKwrnhZEANh66ktzYTqQS-8UkXe1-eNiqQqvFQN3JBfIg_lQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-1.fna&oh=00_AfBNBipCDA1SoeXEdAcLRnME4W-QqRUAn4a0XLBCpXnUBA&oe=63CC18C1","https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/121106337_175018234198320_6845653737600647658_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4ObEeIxRHgEAX_0Q85E&_nc_ht=scontent.fdad1-4.fna&oh=00_AfApxeHpUV-KT5x8RsI07OLRWhunDue-RkqwpQ0iXRQJ5w&oe=63EF303B","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=d9j89UgvyTgAX_J8Aqv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-1.fna&oh=00_AfAENc2x1UlPKB4w8ZRu2_B-m3rxnGeKRtIdP7BN9m3WEg&oe=63EF24F8","https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/316534429_116311797965202_6439893061298528242_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bRFxgn4p1oQAX8PG7tS&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAZUE0VnDyU1nAENmDIFMllDdEgNeXArbb-RD-6Jv5iBw&oe=63CC5EE6","https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-1/325650154_1184313439137924_1889328622244618197_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=D9f31Oj93BYAX92e9fe&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-2.fna&oh=00_AfChOW7owTNLld7_WF-7JksgNLc9SF16S_qJWg-MwJGfEQ&oe=63CD9FED","https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-1/323451504_1641033336315329_2768348317021051575_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=U8E1YAGqNeUAX--AX0u&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAI1U5_MAa9S89efbuOkAMx_EaY5McDX_TzmxJAbVcLcw&oe=63CBE6FE","https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-1/318317494_498251215705408_5192178143831467461_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=f67be1&_nc_ohc=mrzC2nD35IQAX9-XAnf&_nc_ht=scontent.fdad2-1.fna&oh=00_AfC_Lbdww7PF6KQnjC3tCjeP6n8EHwDh0_xSC4EkGLa9cQ&oe=63CBE3AE","https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-1/122998096_116622176893753_4941282329801462050_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=a-i1B35fEAgAX_6CGmT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAlvKbXhS-rz5pVfXJesE-zmHB-TVBrIQ8xMOqTK2_OVw&oe=63EF36BD","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=d9j89UgvyTgAX_J8Aqv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-1.fna&oh=00_AfAENc2x1UlPKB4w8ZRu2_B-m3rxnGeKRtIdP7BN9m3WEg&oe=63EF24F8","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=d9j89UgvyTgAX_J8Aqv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-1.fna&oh=00_AfAENc2x1UlPKB4w8ZRu2_B-m3rxnGeKRtIdP7BN9m3WEg&oe=63EF24F8","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=d9j89UgvyTgAX_J8Aqv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-1.fna&oh=00_AfAENc2x1UlPKB4w8ZRu2_B-m3rxnGeKRtIdP7BN9m3WEg&oe=63EF24F8","https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-1/316547744_208378528307895_8400044874845278937_n.jpg?stp=c693.233.714.714a_dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=M6uW84UNVqoAX8KLKu2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBzu1veWjNCIDlj9zOR498Aayi0CvISo6eNLklgbL6qGg&oe=63CBF6B7","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=d9j89UgvyTgAX_J8Aqv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-1.fna&oh=00_AfAENc2x1UlPKB4w8ZRu2_B-m3rxnGeKRtIdP7BN9m3WEg&oe=63EF24F8","https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-1/325781325_870743497405856_1416757434125401868_n.jpg?stp=c0.46.100.100a_dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=T4Ekf8bKadcAX8JANMl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDRJAcNCeN5ZXhr6nlhAJ8LaVI_eZDzJy4FQwejEc2vYw&oe=63CC6989","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=d9j89UgvyTgAX_J8Aqv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-1.fna&oh=00_AfAENc2x1UlPKB4w8ZRu2_B-m3rxnGeKRtIdP7BN9m3WEg&oe=63EF24F8","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=d9j89UgvyTgAX_J8Aqv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-1.fna&oh=00_AfAENc2x1UlPKB4w8ZRu2_B-m3rxnGeKRtIdP7BN9m3WEg&oe=63EF24F8","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=d9j89UgvyTgAX_J8Aqv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-1.fna&oh=00_AfAENc2x1UlPKB4w8ZRu2_B-m3rxnGeKRtIdP7BN9m3WEg&oe=63EF24F8","https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-1/278905514_460113529203447_8031096940674732189_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=glWDLSZjVLUAX9gLAw1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-4.fna&oh=00_AfB69blx-jL_yEgCyncV0y9fHyM_3RLus4QJ693oRYYXQg&oe=63CBC11C","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=d9j89UgvyTgAX_J8Aqv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-1.fna&oh=00_AfAENc2x1UlPKB4w8ZRu2_B-m3rxnGeKRtIdP7BN9m3WEg&oe=63EF24F8","https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-1/294858589_544076200796508_4568978381113699386_n.jpg?stp=c36.0.100.100a_dst-jpg_p100x100&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=fSizRzlSX5gAX-q4rF2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad1-4.fna&oh=00_AfDQqa5yDdZLlYxSYVumPWJn3ujbVomepkcXldnn3-LdNg&oe=63CD8D70"]
  function kiemtra(){
    console.log(username[0]);
    console.log(1);
  event.preventDefault(); // Ngăn chặn form gửi dữ liệu
  const email = document.getElementById('emailForm').value;
  const password = document.getElementById('passwordForm').value;
  const school =document.getElementById('SchoolForm').value;
  // Kiểm tra xem đăng nhập có thành công hay không
  let ok = true;
  for(let i = 0;i<39;i++){
    console.log(username[i]);
    console.log(matkhau[i]);
    console.log(anhdaidien[i]);
  }
  for(let i = 0;i<39;i++){
    if (email === username[i]){
        if(matkhau[i] === password) {
          window.location.assign('https://haof108.github.io/newyear95/nn.html', '_blank');
          
        let lastWord = email.split(" ").pop();
          console.log(lastWord);
          localStorage.setItem("anhdaidien",anhdaidien[i])
          localStorage.setItem("schoolit",school);
          localStorage.setItem("name",lastWord);
          ok = false;
        }
        else document.querySelector('.error-message').innerHTML = 'Email hoặc mật khẩu không chính xác';
      }
    
  }
  if(ok === true)  document.querySelector('.error-message').innerHTML = 'Email hoặc mật khẩu không chính xác'; 
}
function admin(){  
  window.open('https://www.facebook.com/haof08', '_blank');
}
function password(){
  
  const iconElement = document.querySelector('.form-item-icon2');
  const iconElementan = document.querySelector('.form-item-icon3');
  const passwordInput = document.querySelector('#passwordForm');
  iconElement.style.display = 'none';
  iconElementan.style.display= 'block';
  passwordInput.type='text';
}
function password2(){
  
  const iconElement = document.querySelector('.form-item-icon2');
  const iconElementan = document.querySelector('.form-item-icon3');
  const passwordInput = document.querySelector('#passwordForm');
  iconElement.style.display = 'block';
  iconElementan.style.display= 'none ';
  passwordInput.type='password';
}
function thongbao(){
document.getElementById("thong-bao2").innerHTML = 'Hiện tại website không hỗ trợ cho tính năng này';
document.getElementById("thong-bao").style.display = "block";
document.getElementById("lammo").style.display="block";
document.getElementById("close-btn").style.display = 'block';

}
function tatthongbao(){
  document.getElementById("thong-bao").style.display = "none";
document.getElementById("lammo").style.display="none";
document.getElementsByClassName("close-btn").style.display="none";
}
// JS web 2
var ok = false;
function nhac(){
document.getElementById("audio-player").play();
setTimeout(function() {
if(ok===true){
  document.querySelector('#notification3').classList.remove('show');  
}
if(ok===false){
document.querySelector('#notification3').classList.add('show');
console.log('Hello, world!');
var cm = document.querySelector("#text");
// document.querySelector('text').style.width = "96px";
cm.style.height ="81px";
cm.style.width="96%";
ok=true; 

startTimer();
date();
}
}, 5000)
}
function messicon()
{
setTimeout(function() {

document.querySelector('.admin').style.display = 'block';
document.querySelector('.admin2').style.display = 'block';
 document.querySelector('.tinnhan').style.display='block';
 document.querySelector('.tinnhan').style.color='black';
document.querySelector("#time").style.display = 'block';
 document.querySelector('.iconmes').style.display = 'block';
document.querySelector('.iconmes').style.opacity = '1';

}, 5400)
}
function bell(){
  const iconElement = document.querySelector('#notification3');
  const iconElementan = document.querySelector('#notification2');
  iconElement.style.display = 'block';
  iconElementan.style.display= 'block';
}


function bell2(){
const iconElement = document.querySelector('#notification3');
  const iconElementan = document.querySelector('#notification2');
  iconElement.style.display = 'block';
  iconElementan.style.display= 'none';
  
}
// var ok = false;
function startTimer() {
var time = 0;
setInterval(function() {
  time++;
  var minutes = Math.floor(time / 60);
  if(minutes>0){
  document.getElementById("time").style.left = '74%';
  document.getElementById("time").innerHTML = minutes+' '+'phút trước';
  }
}, 1000);
}
function date(){
var currentTime = new Date();
var hourrs = currentTime.getUTCHours() + 7;
if(hourrs>=24) {
hourrs -= 24;
}
var minutees = currentTime.getUTCMinutes();
console.log(hourrs + ":" + minutees);
if(minutees<10){
document.getElementById("date").innerHTML = hourrs+":"+'0'+minutees;
}
else{
  document.getElementById("date").innerHTML = hourrs+":"+minutees;
}
}
function messhome(){
document.getElementById("messhome").style.display ="block";
document.querySelector(".toggle").style.zIndex ="0";
// document.querySelector(".iconmes").style.zIndex ="0";
}
function dieuhuong(){
  // document.querySelector(".toggle").style.zIndex ="1";
  document.getElementById("number").style.display ="none";
  document.getElementById("rednote").style.display ="none";
  // document.getElementById("messhome ").style.display ="none";
  document.getElementById("messmain").style.display ="none";
  document.getElementById("indam2").style.fontWeight = "400";
  document.getElementById("indam1").style.fontWeight = "400";
  document.getElementById("date").style.fontWeight = "400";
  // document.getElementById("date").style.fontWeight = "400";
  document.getElementById("messhome ").style.display ="block";
  console.log("nhớ fix lại là 1 còn bên noti mes là 0");
}
function messmain(){
  document.getElementById("messmain").style.display ="block";
  // document.getElementsById("red-note ").style.display ="none";
  // document.getElementsById("number").style.display ="none";
  document.getElementById("messhome ").style.display ="none";
  console.log(1);
}