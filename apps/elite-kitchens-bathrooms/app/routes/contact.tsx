import {
  ArrowRight,
  Building2,
  CheckCheck,
  CheckCircle2,
  Clock,
  Hash,
  ListPlus,
  Mail,
  Map,
  MapPin,
  MessageSquare,
  Phone,
  RotateCcw,
  Send,
  Shield,
  Star,
  User,
  UserPen,
  Users
} from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router";

import {
  capitalizeFirst,
  capitalizeWords,
  createMeta,
  formatPhoneNumber,
  getYearsOfExperience,
  validateEmail,
  validatePhone
} from "@/utils";

export function meta() {
  return createMeta({
    title: "Contact Us | Elite Kitchens & Bathrooms",
    description:
      "Get a free estimate for custom kitchen and bathroom remodeling in PA and NJ. Contact Elite Kitchens & Bathrooms today.",
    path: "contact"
  });
}

type FormData = {
  firstName: string;
  lastName: string;
  spouseName: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
  phone: string;
  service: string;
  comments: string;
};

type FormErrors = Partial<Record<keyof FormData, string>> & { form?: string };

const services = [
  { value: "", label: "Select a service..." },
  { value: "kitchen-remodeling", label: "Kitchen Remodeling" },
  { value: "bathroom-remodeling", label: "Bathroom Remodeling" },
  { value: "full-renovation", label: "Full Renovation" },
  { value: "other", label: "Other" }
];

const yearsOfExperience = getYearsOfExperience();

export default function ContactPage() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    spouseName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    phone: "",
    service: "",
    comments: ""
  });

  const stats = [
    { stat: "2,500+", label: "Projects Completed" },
    { stat: `${yearsOfExperience}+`, label: "Years Experience" },
    {
      stat: (
        <span className="flex items-center gap-1">
          5 <Star className="h-4 w-4 fill-current md:h-4 md:w-4" />
        </span>
      ),
      label: "Average Customer Rating"
    },
    { stat: "100%", label: "Satisfaction Guarantee" }
  ];

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    let formattedValue = value;

    switch (name) {
      case "firstName":
      case "lastName":
      case "spouseName":
      case "streetAddress":
      case "city":
        formattedValue = capitalizeWords(value);

        break;
      case "state":
        formattedValue = value.toUpperCase().slice(0, 2);

        break;
      case "zipCode":
        formattedValue = value.replace(/\D/g, "").slice(0, 5);

        break;
      case "phone":
        formattedValue = formatPhoneNumber(value);

        break;
      case "comments":
        formattedValue = capitalizeFirst(value);

        break;
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim() || !/[a-zA-Z]/.test(formData.firstName)) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim() || !/[a-zA-Z]/.test(formData.lastName)) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = "Street address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    } else if (!["PA", "NJ"].includes(formData.state)) {
      newErrors.state = "Must be PA or NJ";
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "Zip code is required";
    } else if (formData.zipCode.length !== 5) {
      newErrors.zipCode = "Zip code must be 5 digits";
    }

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const data = await response.json();

        throw new Error(data.error || "Failed to send message");
      }

      setIsSubmitted(true);
    } catch (error) {
      setErrors({
        form: error instanceof Error ? error.message : "Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      spouseName: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      email: "",
      phone: "",
      service: "",
      comments: ""
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-6xl pb-24 md:pb-0">
        <div className="bg-surface flex flex-col items-center justify-center rounded-2xl p-12 text-center">
          <div className="bg-elite-teal/20 mb-6 rounded-full p-4">
            <CheckCircle2 className="text-elite-teal h-12 w-12" />
          </div>
          <h1 className="text-primary mb-4 font-serif text-3xl md:text-4xl">
            Thank You, {formData.firstName}!
          </h1>
          <p className="text-muted mb-8 max-w-md text-lg">
            {`We've received your request and will contact you within 24 hours to schedule your free
            consultation.`}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              className="bg-elite-teal inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              to="/"
            >
              Return Home
            </Link>
            <Link
              className="bg-surface border-elite-teal/20 text-primary hover:bg-elite-teal/10 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors"
              to="/resources"
            >
              Browse Resources <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl pb-24 md:pb-0">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">CONTACT US</p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            {`Let's design your dream space together.`}
          </h1>
          <div className="bg-elite-teal/20 my-6 h-px w-24" />
          <p className="text-muted text-base md:text-lg">
            Ready to remodel your kitchen or bathroom? Fill out the form below and one of our
            experts will reach out within 24 hours to schedule your free, no-obligation
            consultation.
          </p>
        </div>
        <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <Clock className="mb-2 h-8 w-8 text-white/90" />
          <span className="text-2xl font-semibold text-white">24-Hour</span>
          <p className="text-sm text-white/80">Response Time</p>
        </div>
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2 lg:row-span-3">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <fieldset className="space-y-6 disabled:opacity-60" disabled={isSubmitting}>
              {/* Name Fields */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label
                    className="text-primary mb-2 block text-sm font-medium"
                    htmlFor="firstName"
                  >
                    First Name <span className="text-elite-teal">*</span>
                  </label>
                  <div className="relative">
                    <User className="text-muted absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                    <input
                      className={`bg-canvas border-edge text-primary placeholder:text-muted/50 w-full rounded-xl border py-3 pr-4 pl-10 text-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                        errors.firstName
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:border-elite-teal focus:ring-elite-teal/20"
                      }`}
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label
                    className="text-primary mb-2 block text-sm font-medium"
                    htmlFor="spouseName"
                  >
                    Spouse Name
                  </label>
                  <div className="relative">
                    <Users className="text-muted absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                    <input
                      className="bg-canvas border-edge text-primary placeholder:text-muted/50 focus:border-elite-teal focus:ring-elite-teal/20 w-full rounded-xl border py-3 pr-4 pl-10 text-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                      id="spouseName"
                      name="spouseName"
                      type="text"
                      value={formData.spouseName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 lg:col-span-1">
                  <label className="text-primary mb-2 block text-sm font-medium" htmlFor="lastName">
                    Last Name <span className="text-elite-teal">*</span>
                  </label>
                  <div className="relative">
                    <UserPen className="text-muted absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                    <input
                      className={`bg-canvas border-edge text-primary placeholder:text-muted/50 w-full rounded-xl border py-3 pr-4 pl-10 text-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                        errors.lastName
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:border-elite-teal focus:ring-elite-teal/20"
                      }`}
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>
              {/* Address Fields */}
              <div>
                <label
                  className="text-primary mb-2 block text-sm font-medium"
                  htmlFor="streetAddress"
                >
                  Street Address <span className="text-elite-teal">*</span>
                </label>
                <div className="relative">
                  <MapPin className="text-muted absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                  <input
                    className={`bg-canvas border-edge text-primary placeholder:text-muted/50 w-full rounded-xl border py-3 pr-4 pl-10 text-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                      errors.streetAddress
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:border-elite-teal focus:ring-elite-teal/20"
                    }`}
                    id="streetAddress"
                    name="streetAddress"
                    type="text"
                    value={formData.streetAddress}
                    onChange={handleChange}
                  />
                </div>
                {errors.streetAddress && (
                  <p className="mt-1 text-xs text-red-500">{errors.streetAddress}</p>
                )}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="text-primary mb-2 block text-sm font-medium" htmlFor="city">
                    City <span className="text-elite-teal">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="text-muted absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                    <input
                      className={`bg-canvas border-edge text-primary placeholder:text-muted/50 w-full rounded-xl border py-3 pr-4 pl-10 text-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                        errors.city
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:border-elite-teal focus:ring-elite-teal/20"
                      }`}
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
                </div>
                <div>
                  <label className="text-primary mb-2 block text-sm font-medium" htmlFor="state">
                    State <span className="text-elite-teal">*</span>
                  </label>
                  <div className="relative">
                    <Map className="text-muted absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                    <input
                      className={`bg-canvas border-edge text-primary placeholder:text-muted/50 w-full rounded-xl border py-3 pr-4 pl-10 text-sm uppercase transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                        errors.state
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:border-elite-teal focus:ring-elite-teal/20"
                      }`}
                      id="state"
                      maxLength={2}
                      name="state"
                      type="text"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
                </div>
                <div>
                  <label className="text-primary mb-2 block text-sm font-medium" htmlFor="zipCode">
                    Zip Code <span className="text-elite-teal">*</span>
                  </label>
                  <div className="relative">
                    <Hash className="text-muted absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                    <input
                      className={`bg-canvas border-edge text-primary placeholder:text-muted/50 w-full rounded-xl border py-3 pr-4 pl-10 text-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                        errors.zipCode
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:border-elite-teal focus:ring-elite-teal/20"
                      }`}
                      id="zipCode"
                      inputMode="numeric"
                      maxLength={5}
                      name="zipCode"
                      type="text"
                      value={formData.zipCode}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.zipCode && <p className="mt-1 text-xs text-red-500">{errors.zipCode}</p>}
                </div>
              </div>
              {/* Contact Fields */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-primary mb-2 block text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="text-muted absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                    <input
                      className={`bg-canvas border-edge text-primary placeholder:text-muted/50 w-full rounded-xl border py-3 pr-4 pl-10 text-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:border-elite-teal focus:ring-elite-teal/20"
                      }`}
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-primary mb-2 block text-sm font-medium" htmlFor="phone">
                    Phone Number <span className="text-elite-teal">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="text-muted absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                    <input
                      className={`bg-canvas border-edge text-primary placeholder:text-muted/50 w-full rounded-xl border py-3 pr-4 pl-10 text-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:border-elite-teal focus:ring-elite-teal/20"
                      }`}
                      id="phone"
                      inputMode="tel"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
              </div>
              {/* Service Selection */}
              <div>
                <label className="text-primary mb-2 block text-sm font-medium" htmlFor="service">
                  Service Needed
                </label>
                <div className="relative">
                  <ListPlus className="text-muted pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                  <select
                    className={`bg-canvas border-edge text-primary focus:border-elite-teal focus:ring-elite-teal/20 w-full appearance-none rounded-xl border py-3 pr-4 pl-10 text-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none ${!formData.service ? "text-muted/50" : ""}`}
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    {services
                      .filter((service) => service.value || !formData.service)
                      .map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              {/* Additional Comments */}
              <div>
                <label className="text-primary mb-2 block text-sm font-medium" htmlFor="comments">
                  Additional Comments
                </label>
                <div className="relative">
                  <MessageSquare className="text-muted absolute top-3 left-3 h-5 w-5" />
                  <textarea
                    className="bg-canvas border-edge text-primary placeholder:text-muted/50 focus:border-elite-teal focus:ring-elite-teal/20 min-h-30 w-full resize-none rounded-xl border py-3 pr-4 pl-10 text-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    id="comments"
                    name="comments"
                    placeholder="Tell us about your project or any specific concerns..."
                    value={formData.comments}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {errors.form && (
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-600 dark:text-red-400">
                  {errors.form}
                </div>
              )}
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  className="bg-elite-teal flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl py-4 text-base font-medium text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-1"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Request Free Estimate
                    </>
                  )}
                </button>
                <button
                  className="border-edge text-muted hover:border-elite-teal hover:text-elite-teal flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border px-5 py-4 text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                  disabled={isSubmitting}
                  type="button"
                  onClick={handleClear}
                >
                  <RotateCcw className="h-4 w-4" />
                  Reset Form
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        {/* Contact Info Cards */}
        <div className="flex flex-col gap-4 lg:row-span-3">
          <div className="bg-surface rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-elite-olive/20 rounded-full p-3">
                <Phone className="text-elite-olive h-5 w-5" />
              </div>
              <div>
                <p className="text-primary font-semibold">Call Us</p>
                <a className="text-elite-teal text-sm hover:underline" href="tel:18009025311">
                  (800) 902-5311
                </a>
              </div>
            </div>
            <p className="text-muted text-sm">
              Mon-Fri: 8am-6pm
              <br />
              Sat: 9am-2pm
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-elite-teal/20 rounded-full p-3">
                <Mail className="text-elite-teal h-5 w-5" />
              </div>
              <div>
                <p className="text-primary font-semibold">Email Us</p>
                <a
                  className="text-elite-teal text-sm hover:underline"
                  href="mailto:joe@elitekitchensbathrooms.com"
                >
                  joe@elitekitchensbathrooms.com
                </a>
              </div>
            </div>
            <p className="text-muted text-sm">We respond within 24 hours</p>
          </div>
          <div className="bg-surface rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-elite-olive/20 rounded-full p-3">
                <MapPin className="text-elite-olive h-5 w-5" />
              </div>
              <div>
                <p className="text-primary font-semibold">Service Area</p>
                <p className="text-muted text-sm">PA and NJ</p>
              </div>
            </div>
            <Link className="text-elite-teal text-sm hover:underline" to="/service-areas">
              View all service areas
            </Link>
          </div>
          <div className="bg-elite-olive flex-1 rounded-2xl p-6 text-white">
            <Shield className="mb-3 h-8 w-8 text-white/80" />
            <h3 className="mb-4 text-2xl font-semibold">100% Free Estimates</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <CheckCheck className="h-4 w-4 shrink-0" />
                No obligation
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-4 w-4 shrink-0" />
                No pressure
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-4 w-4 shrink-0" />
                Honest advice from certified experts
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-surface flex flex-col items-center justify-center rounded-2xl p-6 text-center"
          >
            <span className="text-elite-teal text-2xl font-semibold md:text-3xl">{item.stat}</span>
            <p className="text-muted mt-1 text-xs">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
