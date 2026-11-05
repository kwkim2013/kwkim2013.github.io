# 포트폴리오 GitHub Pages 운영 가이드

- [GitHub 저장소](https://github.com/kwkim2013/kwkim2013.github.io)
- [공개 사이트](https://kwkim2013.github.io/)
- [Pages 설정](https://github.com/kwkim2013/kwkim2013.github.io/settings/pages)
- [Actions 실행 기록](https://github.com/kwkim2013/kwkim2013.github.io/actions)

## 배포 설정

1. 저장소에서 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택합니다.
2. [배포 워크플로](../.github/workflows/deploy.yml)는 `main`에 푸시할 때 `npm ci`와 `npm run build`를 실행하고, 생성된 `dist/`를 GitHub Pages에 배포합니다.
3. **Actions → Deploy portfolio to GitHub Pages**에서 최신 실행에 초록색 체크가 표시되면 공개 사이트를 확인합니다. 수동으로 배포하려면 **Run workflow**에서 `main`을 선택합니다.

루트 주소에 배포하므로 Vite의 기본 `base` 값(`/`)을 사용합니다. `dist/`와 `node_modules/`는 `.gitignore`로 관리합니다. 워크플로에 필요한 권한이 선언되어 있으므로 **Deploy keys**는 비워 둬도 됩니다.

## 사이트 공개 중지 및 재개

| 목적 | 방법 |
| --- | --- |
| 사이트를 내리고 자동 재배포도 막기 | **Actions → Deploy portfolio to GitHub Pages → ⋯ → Disable workflow**를 먼저 선택한 뒤, **Settings → Pages → Unpublish site**를 누릅니다. |
| 사이트를 열어 두고 자동 배포만 중지하기 | **Actions → Deploy portfolio to GitHub Pages → ⋯ → Disable workflow**를 선택합니다. |
| 다시 공개하기 | **Settings → Pages**에서 **Source**가 **GitHub Actions**인지 확인합니다. **Actions**에서 **Enable workflow**를 누른 뒤 `main`에서 **Run workflow**를 실행합니다. |

## 오류 해결

| 증상 | 확인 및 조치 |
| --- | --- |
| 빈 화면과 `main.jsx`의 `text/jsx` MIME 오류 | 브라우저가 빌드 전 소스를 받고 있습니다. Pages의 **Source**와 최신 워크플로 성공 여부를 확인한 뒤 사이트를 `Ctrl+F5`로 새로고침합니다. |
| `Multiple artifacts named "github-pages"` | 같은 실행에 동일한 이름의 빌드 결과가 여러 개 있습니다. 현재 워크플로는 `github.run_attempt`를 이름에 사용합니다. 이전 커밋의 실패 건을 재실행하는 대신, 수정된 워크플로가 포함된 `main`에서 새 실행을 시작합니다. |
| `git push`가 `fetch first`로 거절됨 | `git fetch origin`으로 가져온 뒤 `git log --oneline --max-count=5 origin/main`으로 원격 이력을 확인합니다. 원격 변경을 병합하고 충돌이 있다면 해결한 뒤 다시 푸시합니다. |

배포가 실패하면 **Actions**에서 해당 실행을 열고 처음 실패한 단계의 오류 메시지를 확인합니다.

## 참고 문서

- [Vite의 GitHub Pages 배포 가이드](https://vite.dev/guide/static-deploy#github-pages)
- [GitHub Pages 사용자 지정 워크플로](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
