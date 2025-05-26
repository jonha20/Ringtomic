import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Map from "./Map";
import { UserContext } from "@/src/context/userContext";


describe("Map Component", () => {
  it("renderiza el componente Map sin dar error", () => {
    const mockUser = { id: 1 };
    const { container } = render(
      <UserContext.Provider value={{ user: mockUser }}>
        <Map />
      </UserContext.Provider>
    );
    // Comprueba que el mapa existe (por ejemplo, por clase o id)
    const mapDiv = container.getElementsByClassName("full-map leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom");
    expect(mapDiv).not.toBeNull();
  });
});