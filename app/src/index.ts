type AgeType = BrandedType<number, "age">;
type HeightType = BrandedType<number, "height">;

function print(age: AgeType, height: HeightType) {
  console.log("ageを表示:", age[__brand]);
  console.log("heightを表示:", height[__brand]);
}

const age = 25 as AgeType;
const height = 175 as HeightType;
