const twitterShareUrl = "https://twitter.com/intent/tweet";

type CreateQueryStringParams = {
  params: Record<string, string>;
  destination: URL;
  targetUrl: URL;
};

export const createQueryString = ({
  params,
  destination,
  targetUrl,
}: CreateQueryStringParams) => {
  return Object.entries({ ...params }).forEach(([key, value]) => {
    destination.searchParams.append(key, value);
    if (targetUrl) targetUrl.searchParams.append(key, value);
  });
};

export const shareTwitter = () => {
  const url = new URL(window.location.href);
  const destination = new URL(twitterShareUrl);
  destination.searchParams.append("url", url.toString());

  if (window) {
    window.open(destination.toString());
  }
};

export const shareLink = () => {
  const destination = window.location.href
  
  navigator.clipboard.writeText(destination.toString()).then(() => {
    if (window) {
      window.alert('링크 주소가 복사되었습니다.')
    }
  })
}