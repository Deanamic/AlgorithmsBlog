#include <bits/stdc++.h>
using namespace std;

#define Sz(X) int(X.size())

int main(){
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    string a, b;
    while (cin >> a){
        cin >> b;
        string s = a + "." + b;
        int c = s.size()+1;
        vector <int> vi(c);
        vi[0] = -1;
        int j = -1;
        for(int i = 0; i < c-1; ++i,++j){
            while(j > -1 and s[j] != s[i]) j = vi[j];
            vi[i + 1] = j + 1;
        }
        printf("%d\n",vi[vi.size()-1]);
    }
}
