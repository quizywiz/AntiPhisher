#include <bits/stdc++.h>
using namespace std;
int main() {
	cout<<"{";
	for(int i = 0 ; i < 109; i++) {
		string a,b;
		cin >> a >> b;
		for(char& x : a) if(x>='A' && x<='Z') x = x - 'A' + 'a';
		for(char& x : b) if(x>='A' && x<='Z') x = x - 'A' + 'a';
		cout<<"\""<<a<<"\":[\""<<b<<"\"],"<<endl;
	}
	cout<<"}";
	return 0;
}