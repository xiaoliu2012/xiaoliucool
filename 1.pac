function FindProxyForURL(url, host) {
    // 内网不走代理
    if (
        shExpMatch(host, "192.*") ||
        shExpMatch(host, "172.*") ||
        shExpMatch(host, "10.*") ||
        host === "localhost" ||
        host === "127.0.0.1"
    ) {
        return "DIRECT";
    }
    // 其余走代理
    return "PROXY 172.18.120.34:10801";
}