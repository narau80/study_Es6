let x = 2;
const r1 = x++ + x++;
//		((x++) + (x++))
//		((2 + (x++)))
//		( 2 + 3 )
//5
const r2 = ++x + ++x;
//		((++x) + (++x))
//		( 5 + (++x))
//		( 5 + 6 )
//		11
const r3 = x++ + ++x;
//		((x++) + (++x))
//		(6 + (++x))
//		( 6 + 8 )
//	14