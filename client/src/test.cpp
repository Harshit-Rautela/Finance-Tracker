#include<bits/stdc++.h>
using namespace std;

int main(){
    int tt;
    cin>>tt;
    for(int i=0;i<tt;i++){

        int n;
        cin>>n;
        if(i==36){
    cout<<n<<endl;
}
        int a[n];
        for(int i=0;i<n;i++) cin>>a[i];
        int k;
        cin>>k;
        vector<string> v;
        while(k--){
            string s;
            int flag,pole;
            cin>>s;
            if(s.length()!=n){
                v.push_back("NO");
            }else{
                map<char,int> mpp1;
                for(int i=0;i<n;i++){
                    if(mpp1.find(s[i])==mpp1.end()){
                        mpp1[s[i]]=a[i];
                        flag=0;
                    }else if(mpp1.find(s[i])!=mpp1.end()){
                        if(a[i]!=mpp1[s[i]]){
                            flag=1;
                            break;
                        }else{
                            flag=0;
                        }
                    }
                }
                 map<int,char> mpp2;
                for(int i=0;i<n;i++){
                    if(mpp2.find(a[i])==mpp2.end()){
                        mpp2[a[i]]=s[i];
                        pole=0;
                    }else if(mpp2.find(a[i])!=mpp2.end()){
                        if(s[i]!=mpp2[a[i]]){
                            pole=1;
                            break;
                        }
                    }
                }
                if(flag==0 && pole==0){
                    v.push_back("YES");
                }else if(flag==0 && pole==1){
                    v.push_back("NO");
                } else{
                    v.push_back("NO");
                }
            }
        }
        for(auto it:v){
            cout<<it<<endl;
        }
    }
    return 0;
}