import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactSection from "@/components/ContactSection";
import Index from "@/pages/Index";

describe("homepage", () => {
  it("renders the primary JIBTEC landing page", () => {
    render(<Index />);

    expect(screen.getByRole("heading", { name: /we build businesses/i })).toBeInTheDocument();
    const contactLinks = screen.getAllByRole("link", { name: /contact us/i });
    expect(contactLinks.length).toBeGreaterThan(0);
    expect(contactLinks.every((link) => link.getAttribute("href") === "/contact")).toBe(true);
    expect(screen.getAllByText(/financial and business consulting/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/ready to/i)).toBeInTheDocument();
  });

  it("shows the thank-you state after a valid contact page submission", () => {
    render(<ContactSection />);

    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: "Smith" } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: "john@company.com" } });
    fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: "+234 000 000 0000" } });
    fireEvent.change(screen.getByLabelText(/company/i), { target: { value: "JIBTEC Partner" } });
    fireEvent.change(screen.getByLabelText(/select enquiry/i), { target: { value: "Business Advisory" } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "I need advisory support." } });
    fireEvent.click(screen.getByRole("button", { name: /request your strategy session/i }));

    expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    expect(screen.getByText(/senior partner will reach out/i)).toBeInTheDocument();
  });
});
