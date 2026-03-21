# legacy-domain-redirects

旧サブドメインを `https://www.hiroxto.net` 配下へ恒久リダイレクトするためのCloudflare Workers。

## Development

```bash
npm install
npm run dev
```

ローカル確認時は `Host` ヘッダまたは `--host` 相当の設定で対象サブドメインを指定して疎通確認する。
