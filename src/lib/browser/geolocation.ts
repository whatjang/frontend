export interface Coordinates {
  latitude: number;
  longitude: number;
}

export function getCurrentCoordinates(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("현재 위치를 지원하지 않는 브라우저입니다."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        reject(new Error("현재 위치를 가져올 수 없습니다."));
      }
    );
  });
}

export async function watchLocationPermission(
  onChange: (state: PermissionState) => void
) {
  if (!navigator.permissions) {
    return;
  }

  const permission = await navigator.permissions.query({
    name: "geolocation",
  });

  const handleChange = () => {
    onChange(permission.state);
  };

  onChange(permission.state);

  permission.addEventListener("change", handleChange);

  return () => {
    permission.removeEventListener("change", handleChange);
  };
}
