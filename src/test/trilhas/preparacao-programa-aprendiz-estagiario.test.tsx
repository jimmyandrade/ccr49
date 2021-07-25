import TraineeTrack from "../../pages/trilhas/preparacao-programa-aprendiz-estagiario";
import { create } from "react-test-renderer";

jest.mock("next/image", () => "Image");

describe("Trainee Track page", () => {
    it("should match snapshot", () => {
        const testRenderer = create(<TraineeTrack />);
        expect(testRenderer).toMatchSnapshot();
    })
})