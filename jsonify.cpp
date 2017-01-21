#include <bits/stdc++.h>
using namespace std;
int main() {
	cout<<"{";
	for(int i = 0 ; i < 109; i++) {
		string a,b;
		cin >> a >> b;
		cout<<"\""<<a<<"\":\""<<b<<"\","<<endl;
	}
	cout<<"}";
	return 0;
}